import { Page } from '@playwright/test'

/**
 * Performs a click on a widget by its name.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to click.
 * @returns - Whether the click was successful.
 */
export async function clickWidgetByName(page: Page, name: string): Promise<boolean> {
    // First, lets retrive the click point using magic we added
    // to the game using the `@pixi-devtools/plugin` package.
    const point = await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetBounds } = window.__PIXI_DEVTOOLS_METHODS__
        const { getWidgetByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = await getWidgetByName(rootApp, data.name)
        if (widget === undefined) return
        const bounds = await getWidgetBounds(widget)
        return { x: bounds.x, y: bounds.y }
    }, { name })

    if (point === undefined) {
        console.log('Unable to find widget with name:', name)
        console.log('Failed to click the widget, exiting...')
        return false
    }

    // This ensures the click will be triggered.
    const opts = { clickCount: 5, delay: 250 }
    await page.mouse.click(point.x, point.y, opts)
    return true
}
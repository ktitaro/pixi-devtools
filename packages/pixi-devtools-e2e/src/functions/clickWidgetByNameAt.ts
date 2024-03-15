import { Page } from '@playwright/test'

/**
 * Performs a click on a widget by its name at index,
 * use it when you have multiple widgets with same name.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to click.
 * @param index - The index of the widget to click.
 * @returns - Whether the click was successful.
 */
export async function clickWidgetByNameAt(
    page: Page, name: string, index: number,
): Promise<boolean> {
    // First, lets retrive the click point using magic we added
    // to the game using the `@pixi-devtools/plugin` package.
    const point = await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetBounds } = window.__PIXI_DEVTOOLS_METHODS__
        const { getWidgetsByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widgets = await getWidgetsByName(rootApp, data.name)
        if (widgets === undefined) return
        const widgetAtIdx = widgets[data.index]
        if (widgetAtIdx === undefined) return
        const bounds = await getWidgetBounds(widgetAtIdx)
        return { x: bounds.x, y: bounds.y }
    }, { name, index })

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
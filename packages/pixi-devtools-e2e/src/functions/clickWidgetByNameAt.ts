import { Page } from '@playwright/test'

/**
 * Attempts to click a widget by the given name.
 * Use it when you have multiple widget with the
 * same name and you want to get a specific one.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to click.
 * @param index - The index of the widget to click.
 * @returns - Whether the click was successful.
 */
export async function clickWidgetByNameAt(
    page: Page, name: string, index: number,
): Promise<boolean> {
    const point = await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetBounds } = window.__PIXI_DEVTOOLS_METHODS__
        const { getWidgetsByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = (await getWidgetsByName(rootApp, data.name))?.[data.index]
        if (widget === undefined) return undefined
        const bounds = await getWidgetBounds(widget)
        return { x: bounds.x, y: bounds.y }
    }, { name, index })

    // If the widget was not found, and the
    // point is undefined, we return false.
    if (point === undefined) return false

    // This ensures the click will be triggered.
    const opts = { clickCount: 5, delay: 250 }
    await page.mouse.click(point.x, point.y, opts)
    return true
}
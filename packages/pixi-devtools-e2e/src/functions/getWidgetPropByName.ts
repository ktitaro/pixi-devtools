import { Page } from '@playwright/test'

/**
 * Attempts to retrieve the value of the prop
 * of the widget identified by the given name.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to get.
 * @param propKey - The widget prop key to get.
 * @returns - The value of the prop or undefined.
 */
export async function getWidgetPropByName<K = unknown>(
    page: Page, name: string, propKey: string
): Promise<K | undefined> {
    return await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = await getWidgetByName(rootApp, data.name)
        if (widget) return (widget as any)[data.propKey]
    }, { name, propKey })
}
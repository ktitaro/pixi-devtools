import { Page } from '@playwright/test'

/**
 * Attempts to set the value of some property
 * of the widget identified by the given name.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to set.
 * @param propKey - The widget prop key to set.
 * @param propVal - The value to set the prop to.
 * @returns - Whether the prop was set successfully.
 */
export async function setWidgetPropByName<K = unknown>(
    page: Page, name: string, propKey: string, propVal: K,
): Promise<boolean> {
    return await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = await getWidgetByName(rootApp, data.name)
        if (widget) (widget as any)[data.propKey] = data.propVal
        return widget !== undefined
    }, { name, propKey, propVal })
}
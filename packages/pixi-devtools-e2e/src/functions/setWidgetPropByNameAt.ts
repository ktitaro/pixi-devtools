import { Page } from '@playwright/test'

/**
 * Attempts to set the value of some property
 * of the widget identified by the given name.
 * Use it when you have multiple widget with the
 * same name and you want to get a specific one.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to set.
 * @param index - The index of the widget to set.
 * @param propKey - The widget prop key to set.
 * @param propVal - The value to set the prop to.
 * @returns - Whether the prop was set successfully.
 */
export async function setWidgetPropByNameAt<K = unknown>(
    page: Page, name: string, index: number, propKey: string, propVal: K,
): Promise<boolean> {
    return await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetsByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = (await getWidgetsByName(rootApp, data.name))?.[data.index]
        if (widget) (widget as any)[data.propKey] = data.propVal
        return widget !== undefined
    }, { name, index, propKey, propVal })
}
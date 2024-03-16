import { Page } from '@playwright/test'

/**
 * Attempts to retrieve the value of the prop
 * of the widget identified by the given name.
 * Use it when you have multiple widget with the
 * same name and you want to get a specific one.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to get.
 * @param index - The index of the widget to get.
 * @param propKey - The widget prop key to get.
 * @returns - The value of the prop or undefined.
 */
export async function getWidgetPropByNameAt<K = unknown>(
    page: Page, name: string, index: number, propKey: string
): Promise<K | undefined> {
    return await page.evaluate(async (data) => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetsByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widgets = await getWidgetsByName(rootApp, data.name)
        return (widgets?.[data.index] as any)?.[data.propKey]
    }, { name, index, propKey })
}
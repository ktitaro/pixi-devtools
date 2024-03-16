import { Page } from '@playwright/test'

/**
 * Attempts to retrieve the screen label.
 * @param page - The playwright browser page.
 * @returns - The screen label if present.
 */
export async function getScreenLabel(page: Page) {
    return await page.evaluate(async () => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = await getWidgetByName(rootApp, 'GameLabel')
        if (widget) return (widget.getChildAt(0) as any).text
    }) as Promise<string | undefined>
}
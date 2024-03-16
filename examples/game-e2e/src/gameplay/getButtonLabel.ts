import { Page } from '@playwright/test'

/**
 * Attempts to retrieve the button label.
 * @param page - The playwright browser page.
 * @returns - The button label if present.
 */
export async function getButtonLabel(page: Page) {
    return await page.evaluate(async () => {
        const rootApp = window.__PIXI_DEVTOOLS_APP__.stage
        const { getWidgetByName } = window.__PIXI_DEVTOOLS_METHODS__
        const widget = await getWidgetByName(rootApp, 'PlayButton')
        if (widget) return (widget.getChildAt(1) as any).text
    }) as Promise<string | undefined>
}
/**
 * Remove all highlights from the page,
 * added by the widget spotter functions.
 */
export async function cleanHightlights() {
    const selector = 'pixi-devtools-highlight'
    const elements = document.querySelectorAll(selector)
    elements.forEach((elements) => elements.remove())
}
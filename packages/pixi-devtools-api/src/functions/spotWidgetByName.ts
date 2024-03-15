import { Container } from 'pixi.js'
import { getWidgetByName } from './getWidgetByName'
import { spotWidgetBounds } from './spotWidgetBounds'
import { cleanHightlights } from './cleanHightlights'

/**
 * Highlights the boundaries of the widget by name.
 * @param root - The root widget to search for the widget.
 * @param name - The name of the widget you want to highlight.
 */
export async function spotWidgetByName(root: Container, name: string) {
    await cleanHightlights()
    const widget = await getWidgetByName(root, name)
    if (widget !== undefined) spotWidgetBounds(widget)
}

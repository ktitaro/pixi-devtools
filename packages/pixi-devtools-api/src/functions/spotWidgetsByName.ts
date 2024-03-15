import { Container } from 'pixi.js'
import { getWidgetsByName } from './getWidgetsByName'
import { spotWidgetBounds } from './spotWidgetBounds'
import { cleanHightlights } from './cleanHightlights'

/**
 * Highlights the boundaries of the widgets by name.
 * @param root - The root widget to search for the widgets.
 * @param name - The name of the widgets you want to highlight.
 */
export async function spotWidgetsByName(root: Container, name: string) {
    await cleanHightlights()
    const widgets = await getWidgetsByName(root, name)
    if (widgets) widgets.forEach(spotWidgetBounds)
}
import { Container } from 'pixi.js'
import { getWidgetsByName } from './getWidgetsByName'

/**
 * Attempts to retrieve a widget by the name.
 * @param root - The root widget to search in.
 * @param name - The name of the widget to find.
 * @returns - The widget, or undefined if not found.
 */
export async function getWidgetByName(
    root: Container, name: string,
): Promise<Container | undefined> {
    const widgets = await getWidgetsByName(root, name)
    if (widgets !== undefined) return widgets[0]
}
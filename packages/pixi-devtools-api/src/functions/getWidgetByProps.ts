import { Container } from 'pixi.js'
import { propsType } from './getWidgetsByProps'
import { getWidgetsByProps } from './getWidgetsByProps'

/**
 * Attempts to retrieve a widget by the props.
 * @param root - The root widget to search in.
 * @param name - The props you'd like to check for.
 * @returns - The widget, or undefined if not found.
 */
export async function getWidgetByProps(
    root: Container, props: propsType,
): Promise<Container | undefined> {
    const widgets = await getWidgetsByProps(root, props)
    if (widgets !== undefined) return widgets[0]
}
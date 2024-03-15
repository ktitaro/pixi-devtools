import { Container } from 'pixi.js'

/**
 * Attempts to retrieve widgets by the name.
 * @param root - The root widget to search in.
 * @param name - The name of the widget to find.
 * @returns - The widgets, or undefined if not found.
 */
export async function getWidgetsByName(
    root: Container, name: string,
): Promise<Container[] | undefined> {
    const widgets = []
    if (root.name === name) widgets.push(root)
    if (root.children) for (const child of root.children) {
        const childWidgets = await getWidgetsByName(child, name)
        if (childWidgets) widgets.push(...childWidgets)
    }
    return widgets
}
import { Container } from 'pixi.js'

// Defines the type for the search query props.
export type propsType = Record<string, unknown>

/**
 * Checks whether a widget has all the given props.
 * @param widget - The widget you'd like to check.
 * @param props - The props you'd like to check for.
 * @returns - Whether the widget has all the props.
 */
const checkHasProps = (widget: Container, props: propsType): boolean => {
    return Object.keys(props).every((key) => (widget as any)[key] === props[key])
}

/**
 * Attempts to retrieve widgets by the props.
 * @param root - The root widget to search in.
 * @param props - The set of props to search for.
 * @returns - The widgets, or undefined if not found.
 */
export async function getWidgetsByProps(
    root: Container, props: propsType,
): Promise<Container[] | undefined> {
    const widgets = []
    if (checkHasProps(root, props)) widgets.push(root)
    if (root.children) for (const child of root.children) {
        const childWidgets = await getWidgetsByProps(child, props)
        if (childWidgets) widgets.push(...childWidgets)
    }
    return widgets
}
import { Bounds } from 'pixi.js'
import { Container } from 'pixi.js'

/**
 * Attempts to retrieve the bounds of a widget,
 * the position will be in global coordinates.
 * @param widget - The widget to get the bounds of.
 * @returns - The bounds within global coordinates.
 */
export async function getWidgetBounds(widget: Container): Promise<Bounds> {
    const absPos = widget.getGlobalPosition()
    const bounds = widget.getLocalBounds()
    bounds.x = absPos.x
    bounds.y = absPos.y
    return bounds
}
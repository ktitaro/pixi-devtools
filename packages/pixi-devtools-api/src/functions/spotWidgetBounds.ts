import { Bounds } from 'pixi.js'
import { Container } from 'pixi.js'
import { getWidgetBounds } from './getWidgetBounds'

/**
 * Generates a visual emphasis on the boundaries of a widget.
 * @param bounds - The dimensions and position to be emphasized.
 * @returns - The DOM element responsible for the visual emphasis.
 */
function createBoundsRectHighlight(bounds: Bounds) {
    const elem = document.createElement('div')
    elem.style.top = `${bounds.y}px`
    elem.style.left = `${bounds.x}px`
    elem.style.width = `${bounds.width}px`
    elem.style.height = `${bounds.height}px`
    elem.style.border = '2px solid red'
    return elem
}

/**
 * Generates a visual emphasis on the center point of a widget.
 * @param bounds - The dimensions and position to be emphasized.
 * @returns - The DOM element responsible for the visual emphasis.
 */
function createCenterPointHightlight(bounds: Bounds) {
    const elem = document.createElement('div')
    const centerX = (bounds.x + bounds.width / 2)
    const centerY = (bounds.y + bounds.height / 2)
    elem.style.top = `${centerX}px`
    elem.style.left = `${centerY}px`
    elem.style.width = '10px'
    elem.style.height = '10px'
    elem.style.position = 'relative'
    elem.style.borderRadius = '999px'
    elem.style.backgroundColor = 'green'
    return elem
}

/**
 * Assembles visual emphasis on the boundaries of a widget.
 * @param bounds - The dimensions and position to be emphasized.
 * @returns - The DOM element responsible for the visual emphasis.
 */
function createHightlight(bounds: Bounds) {
    const container = document.createElement('div')
    container.appendChild(createBoundsRectHighlight(bounds))
    container.appendChild(createCenterPointHightlight(bounds))
    container.classList.add('pixi-devtools-highlight')
    container.style.zIndex = '9'.repeat(9)
    container.style.position = 'absolute'
    container.style.pointerEvents = 'none'
    return container
}

/**
 * Highlights the visual boundaries of the widget.
 * @param widget - The widget you want to highlight.
 */
export async function spotWidgetBounds(widget: Container) {
    const bounds = await getWidgetBounds(widget)
    const element = createHightlight(bounds)
    document.body.appendChild(element)
}
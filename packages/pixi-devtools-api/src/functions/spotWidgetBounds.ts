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
    elem.style.width = `${bounds.width}px`
    elem.style.height = `${bounds.height}px`
    elem.style.border = '2px solid red'
    elem.style.position = 'relative'
    return elem
}

/**
 * Generates a visual emphasis on the center point of a widget.
 * @param bounds - The dimensions and position to be emphasized.
 * @returns - The DOM element responsible for the visual emphasis.
 */
function createCenterPointHightlight(bounds: Bounds) {
    const elem = document.createElement('div')
    const posX = (bounds.width / 2)
    const posY = (bounds.height / 2)
    elem.style.top = `${posY}px`
    elem.style.left = `${posX}px`
    elem.style.width = '10px'
    elem.style.height = '10px'
    elem.style.position = 'absolute'
    elem.style.borderRadius = '999px'
    elem.style.backgroundColor = 'red'
    return elem
}

/**
 * Assembles visual emphasis on the boundaries of a widget.
 * @param bounds - The dimensions and position to be emphasized.
 * @returns - The DOM element responsible for the visual emphasis.
 */
function createHightlight(bounds: Bounds) {
    const elem = document.createElement('div')
    const posX = (bounds.x - (bounds.width / 2))
    const posY = (bounds.y - (bounds.height / 2))
    elem.appendChild(createBoundsRectHighlight(bounds))
    elem.appendChild(createCenterPointHightlight(bounds))
    elem.classList.add('pixi-devtools-highlight')
    elem.style.top = `${posY}px`
    elem.style.left = `${posX}px`
    elem.style.zIndex = '9'.repeat(9)
    elem.style.position = 'absolute'
    elem.style.pointerEvents = 'none'
    return elem
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
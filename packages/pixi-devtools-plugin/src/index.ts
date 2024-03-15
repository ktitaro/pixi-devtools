import * as PIXI from 'pixi.js'

/**
 * Exposes the `PIXI.Application` instance to the window,
 * so that it can be accessed from the browser extension.
 * @param app - The `PIXI.Application` instance.
 */
export function setupDevtools(app: PIXI.Application) {
    window.__PIXI_DEVTOOLS_APP__ = app
}
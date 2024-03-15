import * as PIXI from 'pixi.js'
import { getWidgetByName } from '@pixi-devtools/api'
import { getWidgetsByName } from '@pixi-devtools/api'
import { spotWidgetByName } from '@pixi-devtools/api'
import { spotWidgetsByName } from '@pixi-devtools/api'

/**
 * Performs the setup for the devtools plugin.
 * @param app - The `PIXI.Application` instance.
 */
export function setupDevtools(app: PIXI.Application) {
    window.__PIXI_DEVTOOLS_APP__ = app
    window.__PIXI_DEVTOOLS_METHODS__ = {
        getWidgetByName,
        getWidgetsByName,
        spotWidgetByName,
        spotWidgetsByName
    }
}
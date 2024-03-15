import * as PIXI from 'pixi.js'
import { getWidgetBounds } from '@pixi-devtools/api'
import { getWidgetByName } from '@pixi-devtools/api'
import { getWidgetsByName } from '@pixi-devtools/api'
import { cleanHightlights } from '@pixi-devtools/api'
import { spotWidgetBounds } from '@pixi-devtools/api'
import { spotWidgetByName } from '@pixi-devtools/api'
import { spotWidgetsByName } from '@pixi-devtools/api'

/**
 * Performs the setup for the devtools plugin.
 * @param app - The `PIXI.Application` instance.
 */
export function setupDevtools(app: PIXI.Application) {
    window.__PIXI_DEVTOOLS_APP__ = app
    window.__PIXI_DEVTOOLS_METHODS__ = {
        getWidgetBounds,
        getWidgetByName,
        getWidgetsByName,
        cleanHightlights,
        spotWidgetBounds,
        spotWidgetByName,
        spotWidgetsByName
    }
}
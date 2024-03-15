import * as PIXI from 'pixi.js'
import { getWidgetByName } from '@pixi-devtools/api'
import { getWidgetsByName } from '@pixi-devtools/api'
import { spotWidgetByName } from '@pixi-devtools/api'
import { spotWidgetsByName } from '@pixi-devtools/api'

declare global {
    interface Window {
        __PIXI_DEVTOOLS_APP__: PIXI.Application
        __PIXI_DEVTOOLS_METHODS__: {
            getWidgetByName: typeof getWidgetByName
            getWidgetsByName: typeof getWidgetsByName
            spotWidgetByName: typeof spotWidgetByName
            spotWidgetsByName: typeof spotWidgetsByName
        }
    }
}
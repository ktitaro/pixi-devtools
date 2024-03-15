import * as PIXI from 'pixi.js'
import { getWidgetBounds } from '@pixi-devtools/api'
import { getWidgetByName } from '@pixi-devtools/api'
import { getWidgetByProps } from '@pixi-devtools/api'
import { getWidgetsByName } from '@pixi-devtools/api'
import { cleanHightlights } from '@pixi-devtools/api'
import { spotWidgetByName } from '@pixi-devtools/api'
import { spotWidgetBounds } from '@pixi-devtools/api'
import { getWidgetsByProps } from '@pixi-devtools/api'
import { spotWidgetsByName } from '@pixi-devtools/api'

declare global {
    interface Window {
        __PIXI_DEVTOOLS_APP__: PIXI.Application
        __PIXI_DEVTOOLS_METHODS__: {
            getWidgetBounds: typeof getWidgetBounds
            getWidgetByName: typeof getWidgetByName
            getWidgetByProps: typeof getWidgetByProps
            getWidgetsByName: typeof getWidgetsByName
            cleanHightlights: typeof cleanHightlights
            spotWidgetBounds: typeof spotWidgetBounds
            spotWidgetByName: typeof spotWidgetByName
            getWidgetsByProps: typeof getWidgetsByProps
            spotWidgetsByName: typeof spotWidgetsByName
        }
    }
}
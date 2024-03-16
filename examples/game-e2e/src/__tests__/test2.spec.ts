import { test, expect } from '@playwright/test'
import { clickWidgetByName } from '@pixi-devtools/e2e'
import { getScreenLabel } from '../gameplay'
import { sleep } from '../toolbox'

test('Screen has a correct label', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })
    await sleep(1000) // Wait for screen load.
    await clickWidgetByName(page, 'PlayButton')
    await sleep(1000) // Wait for screen change.
    const label = await getScreenLabel(page)
    expect(label).toBe('There is no game yet!')
})
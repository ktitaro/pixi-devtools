import { test, expect } from '@playwright/test'
import { getButtonLabel } from '../gameplay'
import { sleep } from '../toolbox'

test('Button has a correct label', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })
    await sleep(1000) // Wait for screen load.
    const label = await getButtonLabel(page)
    expect(label).toBe('Click to play!')
})
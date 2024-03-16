import { Page } from '@playwright/test'
import { getWidgetPropByName } from '..'

/**
 * Attempts to test a prop of widget by the given name
 * against the validity using the given test function.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to test.
 * @param propKey - The key of the prop to test.
 * @param propTest - The test function to use.
 * @returns - Whether the test was successful.
 */
export async function testWidgetPropByName<K>(
    page: Page,
    name: string,
    propKey: string,
    propTest: (v: K) => boolean
): Promise<boolean> {
    const propVal = await getWidgetPropByName<K>(page, name, propKey)
    return propVal !== undefined ? propTest(propVal) : false
}
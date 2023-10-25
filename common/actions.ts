

import { Locator } from '@playwright/test'

/**
 * Clicks on the element specified by the given locator.
 * @param page - The Playwright page object.
 * @param locator - The locator string for the element to click on.
 */
export async function click(locator: Locator) {
    console.log(`Clicking on ${locator}`)
    await locator.click()
}

/**
 * Types the given text into the element located by the given locator.
 * @param {Page} page - The Playwright page object.
 * @param {string} locator - The locator for the element to type into.
 * @param {string} text - The text to type into the element.
 * @returns {Promise<void>} - A Promise that resolves when the text has been typed into the element.
 */
export async function fill(locator: Locator, text: string , { clearFirst = true } = {}) {
    clearFirst ? await clear(locator) : null
    console.log(`Typing ${text} into ${locator}`)
    locator.fill(text)
}

/**
 * Clears the text from the specified locator on the given page.
 * @param {Page} page - The page to clear the text from.
 * @param {Locator} locator - The locator of the element to clear the text from.
 * @returns {Promise<void>}
 */
export async function clear(locator: Locator) {
    console.log(`Clearing text from ${locator}`)
    await locator.clear()
}

/**
 * Types a given text slowly into a specified locator on a page.
 * @param page - The page to type the text on.
 * @param locator - The locator to type the text into.
 * @param text - The text to type.
 * @param options - The options for typing the text.
 * @param options.delay - The delay between typing each character in milliseconds. Default is 100ms.
 */
export async function typeSlowly(locator: Locator, text: string, { delay = 100 } = {}) {
    console.log(`Typing ${text} into ${locator}`)
    for (const character of text) {
        await locator.type(character, { delay: delay })
    }
}
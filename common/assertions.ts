import { Locator, Page, expect } from '@playwright/test'

import config from '../playwright.config'

/**
 * A class containing various assertion methods for Playwright tests.
 */
class Assertions {
    /**
     * Asserts that the given locator contains the expected text.
     * @param locator - The Playwright locator to search for the text.
     * @param expectedText - The expected text to find in the locator OR a regex to match against the text.
     * @param options - Optional parameters for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async hasExactText(locator: Locator, expectedText: string | RegExp, { messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} contains ${expectedText}`)
        await expect(locator, messageOnFailure).toHaveText(expectedText)
    }
    
    /**
     * Asserts that the given locator has the expected value.
     * @param locator - The Playwright locator to check the value of.
     * @param expectedValue - The expected value of the locator.
     * @param options - Optional parameters for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async hasValue(locator: Locator, expectedValue: string, { messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} has value ${expectedValue}`)
        await expect(locator, messageOnFailure).toHaveValue(expectedValue)
    }
    
    /**
     * Asserts that the given page has the expected title.
     * @param page - The Playwright page to check the title of.
     * @param expectedTitle - The expected title of the page.
     * @param options - Optional parameters for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async hasTitle(page: Page, expectedTitle: string, { messageOnFailure ='' } = {}) {
        console.log(`Asserting that page title is ${expectedTitle}`)
        await expect(page, messageOnFailure).toHaveTitle(expectedTitle)
    }
    
    /**
     * Asserts that the given page has the expected URL.
     * @param page - The Playwright page to check the URL of.
     * @param expectedUrl - The expected URL of the page.
     * @param options - Optional parameters for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async hasUrl(page: Page, expectedUrl: string, { messageOnFailure ='' } = {}) { 
        console.log(`Asserting that page URL is ${expectedUrl}`)
        await expect(page, messageOnFailure).toHaveURL(expectedUrl)
    }
    
    /**
     * Asserts that the given locator is visible.
     * @param locator - The Playwright locator to check the visibility of.
     * @param options - Optional parameters for the assertion.
     * @param options.timeout - The timeout for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isVisible(locator: Locator, { timeout = config.expect?.timeout, messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is visible`)
        await expect(locator, messageOnFailure).toBeVisible({ timeout: timeout })
    }
    
    /**
     * Asserts that the given locator is hidden.
     * @param locator - The Playwright locator to check the visibility of.
     * @param options - Optional parameters for the assertion.
     * @param options.timeout - The timeout for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isHidden(locator: Locator, { timeout = config.expect?.timeout, messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is hidden`)
        await expect(locator, messageOnFailure).toBeHidden({ timeout: timeout })
    }
    
    /**
     * Asserts that the given locator is checked.
     * @param locator - The Playwright locator to check the checked state of.
     * @param options - Optional parameters for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isChecked(locator: Locator, { messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is checked`)
        await expect(locator, messageOnFailure).toBeChecked()
    }
    
    /**
     * Asserts that the given locator is not checked.
     * @param locator - The Playwright locator to check the checked state of.
     * @param options - Optional parameters for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isNotChecked(locator: Locator, { messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is not checked`)
        await expect(locator, messageOnFailure).toBeChecked({ checked: false })
    }
    
    /**
     * Asserts that the given locator is disabled.
     * @param locator - The Playwright locator to check the disabled state of.
     * @param options - Optional parameters for the assertion.
     * @param options.timeout - The timeout for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isDisabled(locator: Locator, { timeout = config.expect?.timeout, messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is disabled`)
        await expect(locator, messageOnFailure).toBeDisabled({ timeout: timeout })
    }
    
    /**
     * Asserts that the given locator is enabled.
     * @param locator - The Playwright locator to check the enabled state of.
     * @param options - Optional parameters for the assertion.
     * @param options.timeout - The timeout for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isEnabled(locator: Locator, { timeout = config.expect?.timeout, messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is enabled`)
        await expect(locator, messageOnFailure).toBeEnabled({ timeout: timeout })
    }
    
    /**
     * Asserts that the given locator is focused.
     * @param locator - The Playwright locator to check the focus state of.
     * @param options - Optional parameters for the assertion.
     * @param options.timeout - The timeout for the assertion.
     * @param options.messageOnFailure - The message to display on failure.
     */
    async isFocused(locator: Locator, { timeout = config.expect?.timeout, messageOnFailure ='' } = {}) {
        console.log(`Asserting that ${locator} is focused`)
        await expect(locator, messageOnFailure).toBeFocused({ timeout: timeout })
    }
}

export default new Assertions()
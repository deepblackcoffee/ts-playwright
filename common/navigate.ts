import { Browser, Page } from '@playwright/test'

/**
 * Navigates the given page to the specified URL.
 * @param {Page} page - The Playwright page object to navigate.
 * @param {string} url - The URL to navigate to.
 * @returns {Promise<void>} - A Promise that resolves when the navigation is complete.
 */
export async function to(page: Page, url: string) {
    console.log(`Navigating to ${url}`)
    await page.goto(url)
}

/**
 * Reloads the current page.
 * @param {Page} page - The Playwright page object.
 * @returns {Promise<void>} - Promise that resolves when the page is reloaded.
 */
export async function reload(page: Page) {
    console.log('Reloading page')
    await page.reload()
}

/**
 * Creates a new page in a new context of the given browser instance.
 * @param {any} browser - The browser instance to create the new page in.
 * @returns {Promise<Page>} - A promise that resolves to the new page instance.
 */
export async function getNewPage(browser: Browser): Promise<Page> {
    console.log('Opening new page')
    const context = await browser.newContext()
    return await context.newPage()
}
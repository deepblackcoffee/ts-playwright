import { test } from '@playwright/test'
import { Page } from '@playwright/test'
import * as navigate from 'common/navigate'
import assert from 'common/assertions'
import { SamplePlaywrightPage } from 'page-objects-examples/sample-playwright-page'
import { SampleHeader } from 'page-objects-examples/sample-header'

test.describe('Test Navigations on Playwright', () => {
    let testPage: Page
    let header: SampleHeader

    test.beforeAll(async ({ browser }) => {
        testPage = await navigate.getNewPage(browser)
        header = new SampleHeader(testPage)
    })

    test('Navigate to Playwright page', async () => {
        const playwrightPage = await new SamplePlaywrightPage(testPage).goTo()

        await test.step('Verify that the header is visible', async () => {
            await assert.isVisible(header.home)
        })

        await test.step('Go to Get Started page', async () => {
            await playwrightPage.clickGetStarted()
        })

        await test.step('Verify that the header is visible', async () => {
            await assert.isVisible(header.home)
        })

        await test.step('Go to Python page', async () => {
            await header.goToPython()
            await header.ready()
        })

        await test.step('Verify that the header is visible', async () => {
            await assert.isVisible(header.home)
        })
    })
})
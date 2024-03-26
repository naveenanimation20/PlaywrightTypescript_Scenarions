import {test, expect, Browser, Page, Locator, FrameLocator, BrowserContext} from '@playwright/test'
import { log } from 'console';
import { channel } from 'diagnostics_channel';
import { webkit, chromium, firefox } from 'playwright'

test('Aria Role locator test', async () => {
    
    const browser: BrowserContext = await chromium.launchPersistentContext('', { channel: 'chrome', headless: false });

    const pages = browser.pages();

    const page: Page = pages[0];


    //const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    
    await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Forgotten Password' })).toBeVisible();

    await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
   await page.getByRole('radio', { name: 'Yes' }).click();

   await expect(page.getByRole('checkbox')).toBeVisible();
    await page.getByRole('checkbox').click();


    await expect(page.getByRole('button', {name: 'Continue'})).toBeVisible();
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.waitForTimeout(3000);

   
});
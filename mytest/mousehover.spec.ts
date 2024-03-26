import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('move to element', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://www.spicejet.com/");
   await page.getByText('Add-ons').first().hover();
  await  page.getByText('Visa Services').first().click();

    await page.waitForTimeout(15000);

});
import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('Focus Element Test ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");
    await page.getByText("Accept Cookies").focus();
    await page.getByText("Accept Cookies").click();

    const fullName = await page.locator("#Form_getForm_Name");
    await fullName.focus();
    await fullName.fill("testing automation");




    await page.waitForTimeout(10000);

});
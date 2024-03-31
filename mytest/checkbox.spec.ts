import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('checkbox and radio button Test ', async()=>{
    const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
 
     await page.goto("https://classic.freecrm.com/register/");

    await page.locator("input[name='agreeTerms']").check();
    await expect(page.locator("input[name='agreeTerms']")).toBeChecked();
 
 
    // await page.waitForTimeout(5000);
 
 });
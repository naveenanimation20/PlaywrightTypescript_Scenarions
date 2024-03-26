import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('Select based Drop Down test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    await page.goto("https://www.hdfcbank.com/");
    await page.locator("//span[text()='Loans']/parent::a").click();

    await page.locator("//li[text()='Credit Card Services']").click();


    // const allOptions = await page.$$('ul.dropdown1 li');
    // console.log(allOptions.length);

    // for (const e of allOptions) {
    //     const text = await e.textContent();
    //     console.log(text);
    //     if (text === 'Cards') {
    //         e.click();
    //         break;
    //         }
    // }

    await page.waitForTimeout(15000);


});
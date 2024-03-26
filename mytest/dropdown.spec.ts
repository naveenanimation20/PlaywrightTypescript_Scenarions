import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('Select based Drop Down test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropDown = 'select#Contact_CountryCode';

  await page.locator(countryDropDown).selectOption({ value: 'AD' });
  
    await page.selectOption(countryDropDown, { value: 'AD' });
   // await page.selectOption(countryDropDown, { label: 'Australia' });
  // await page.selectOption(countryDropDown, { index: 10 });

    //select#Contact_CountryCode > option
    // const allOptions = await page.$$(countryDropDown + ' > option');
    // console.log(allOptions.length);

    // for (const e of allOptions) {
    //     const text = await e.textContent();
    //     console.log(text);
    //      if (text === 'India') {
    //         await page.selectOption(countryDropDown, { label: text });
    //         break;
    //         }
    // }

    await page.waitForTimeout(15000);


});




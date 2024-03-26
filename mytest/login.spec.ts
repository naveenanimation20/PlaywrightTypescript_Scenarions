import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
  
    const emailId:Locator =  page.locator('#input-email');
    const password:Locator =  page.locator('#input-password');
    const loginButton:Locator = page.locator("[value='Login']");

    await emailId.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
    await loginButton.click();

    const title = await page.title();
    console.log("home page title: ", title);
    await page.screenshot({path: 'homepage.png'});

    expect(title).toEqual('My Account');

   // await browser.close();

   //await new Promise(() => {}); // prevents your script from exiting! 

});

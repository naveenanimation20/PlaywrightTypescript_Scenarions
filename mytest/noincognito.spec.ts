import {test, expect, Browser, Page, Locator, FrameLocator, BrowserContext} from '@playwright/test'
import { log } from 'console';
import { channel } from 'diagnostics_channel';
import { webkit, chromium, firefox } from 'playwright'

test('No Incognito test', async () => {
    
    // const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
    
    //open the browser in incognito mode
   // const browser:BrowserContext = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' });
    const browser:BrowserContext = await webkit.launchPersistentContext('', { headless: false });
    const pages = browser.pages();//2- 0 to 1
   const page:Page =  pages[0];
    
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    
    await  page.locator('id=input-firstname').fill("naveen")
    await page.locator('id=input-lastname').fill("Automation Labs");
 
     


   

    await page.waitForTimeout(10000);

   
});
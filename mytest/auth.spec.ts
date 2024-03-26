import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('auth test', async()=>{

  const browser:Browser =  await firefox.launch({headless: true});
  const context:BrowserContext = await browser.newContext();
  const page:Page = await context.newPage();

  const username = 'admin';
  const password = 'admin';
  //const authHeader = 'Basic ' + btoa(username+':'+password);
  page.setExtraHTTPHeaders({Authorization : createAuthHeader(username, password)});

   await page.goto('https://the-internet.herokuapp.com/basic_auth');


//await new Promise(() => {}); // prevents your script from exiting! 

});

function createAuthHeader(username:any, password:any){
    return 'Basic ' + btoa(username+':'+password);
}
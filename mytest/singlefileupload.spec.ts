import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('Single File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

  // await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

    //single upload:
    // await page.locator("input[name='upfile']").setInputFiles("/Users/naveenautomationlabs/Documents/FileToUpload/logo.png");

    // await page.waitForTimeout(3000);

    // //deselect files:
    // await page.locator("input[name='upfile']").setInputFiles([]);

    //upload file from buffer memory:

    // await page.locator("input[name='upfile']").setInputFiles({
    //     name: 'naveen_resume.txt',
    //     mimeType: 'text/plain',
    //     buffer: Buffer.from('this is naveen resume')
    //   });



    await page.goto("https://www.roberthalf.com/au/en/find-jobs/upload-resume/app");

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByLabel("Upload resume").first().click();

const fileChooser = await fileChooserPromise;
await fileChooser.setFiles(path.join(__dirname, '/Users/naveenautomationlabs/Documents/FileToUpload/logo.png'));





    await page.waitForTimeout(5000);

});
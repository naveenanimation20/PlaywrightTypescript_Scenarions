import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('Single File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    //multiple files:
    await page.locator("input[name='filesToUpload']")
        .setInputFiles([
            path.join("/Users/naveenautomationlabs/Documents/FileToUpload/logo.png"),
            path.join("/Users/naveenautomationlabs/Documents/FileToUpload/search.csv"),
            path.join("/Users/naveenautomationlabs/Documents/FileToUpload/AWS.txt")]);

    await page.waitForTimeout(4000);
    

    
    //deselect files:
    await page.locator("input[name='filesToUpload']").setInputFiles([]);


    
    //single file
            // await page.locator("input[name='filesToUpload']")
            // .setInputFiles([
            //     path.join("/Users/naveenautomationlabs/Documents/FileToUpload/logo.png"),
            //     ]);



    await page.waitForTimeout(5000);

});
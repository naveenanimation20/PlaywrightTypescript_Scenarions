import { test, expect, Browser, Page } from '@playwright/test';
import { webkit, firefox, chromium } from 'playwright';


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation11' })).toBeVisible();
// });

// test('check search', async({ page })=>{
//   await page.goto('https://playwright.dev/');
//   await expect(page.locator('button.DocSearch')).toBeVisible();

// });

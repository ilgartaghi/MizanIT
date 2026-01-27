import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.screenshot({path:'tests/screenshots/' + Date.now() + 'HomePage.png'})
});

test('Full page screenshot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.screenshot({path:'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true})
});

test('Element screenshot', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('//table[@name="BookTable"]').screenshot({path:'tests/screenshots/' + Date.now() + 'Element.png'})
});
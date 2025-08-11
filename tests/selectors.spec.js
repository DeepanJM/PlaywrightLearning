import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('selectors', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.saucedemo.com/');
  await page.pause();

  // Use different selectors to interact with elements
  await page.click('#user-name'); // Text selector
  await page.locator('#user-name').fill('standard_user'); // ID selector

  // Using CSS selector
  await page.click('#login-button');
  await page.locator('#login-button').click(); // Class selector

  // Using XPath selector
  await page.locator('//*[@id="password"]').fill('secret_sauce');

  // Using text selector
  //await page.locator('text=Login').click(); // Text selector
  await page.locator('input:has-text("Login")').click(); // Has text selector
  await page.pause();
});
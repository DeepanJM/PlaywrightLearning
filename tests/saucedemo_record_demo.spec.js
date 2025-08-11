import { test, expect } from '@playwright/test';

test('saucedemo_record_demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="primary-header"] div').filter({ hasText: 'Swag Labs' }).first().click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
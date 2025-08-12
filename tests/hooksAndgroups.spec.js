import { test, expect } from '@playwright/test';

test.describe('All my tests', () => {


    test.beforeEach(async ({ page }) => {
        // Navigate to the page
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html');

        //   await page.close();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Homepage Checks', async ({ page }) => {
        // Navigate to the page
        //   await page.goto('https://www.saucedemo.com/');

        //   await page.locator('[data-test="username"]').click();
        //   await page.locator('[data-test="username"]').fill('standard_user');
        //   await page.locator('[data-test="password"]').click();
        //   await page.locator('[data-test="password"]').fill('secret_sauce');
        //   await page.locator('[data-test="login-button"]').click();
        //   await page.waitForURL('https://www.saucedemo.com/inventory.html');

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="item-0-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();

        //   await page.close();
    });

    test('Logout', async ({ page }) => {
        // Navigate to the page
        //   await page.goto('https://www.saucedemo.com/');

        //   await page.locator('[data-test="username"]').click();
        //   await page.locator('[data-test="username"]').fill('standard_user');
        //   await page.locator('[data-test="password"]').click();
        //   await page.locator('[data-test="password"]').fill('secret_sauce');
        //   await page.locator('[data-test="login-button"]').click();
        //   await page.waitForURL('https://www.saucedemo.com/inventory.html');

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await page.waitForURL('https://www.saucedemo.com/');

        //   await page.close();
    });

});
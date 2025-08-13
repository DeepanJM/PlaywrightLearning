import { test, expect, chromium } from '@playwright/test';


test('FIFA', async ({ page }) => {
    //test.setTimeout(30000); // 30 seconds for the whole test

       const browser = await chromium.launch({
        headless: false,
        slowMo: 30000 // Slow down by 1000ms to see the actions
    });

    await page.goto('https://www.fifa.com/en');
    await page.getByRole('button', { name: 'I\'m OK with that' }).click();
    await page.locator('svg').first().click();

    //Finds the main navigation section using a CSS selector.
    //Asserts that it's visible on the page
    const mainNav = page.locator('#mainLinksID > nav > div > div').first();
    await expect(mainNav).toBeVisible();



    //Assert for specific navigation items
    //Lists the expected navigation menu items
    const expectedNavItems = [
        'TOURNAMENTS',
        'MATCH CENTRE',
        'NEWS',
        'RANKINGS',
        'WATCH ON FIFA+',
        'PLAY',
        'SHOP',
        'INSIDE FIFA'
    ];

    //Loops through each item and checks if it's visible on the page within 10 seconds.
    for (const item of expectedNavItems) {
        await expect.soft(page.locator(`text=${item}`).first()).toBeVisible();
    }


})
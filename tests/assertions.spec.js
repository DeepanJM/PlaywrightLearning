import { test, expect } from '@playwright/test';

test('Assertion Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    
    //Use for using locator in conditional statements
    if (await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }

    //Check if the element is visible or not
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    //await expect(page.locator('text=The Kitchen')).toBeHidden();
    //This is a soft assertion, it will not fail the test if the condition is not met
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    //Check if the element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    //await expect(page.locator('text=The Kitchen')).toBeDisabled();
    //This is a soft assertion, it will not fail the test if the condition is not met
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //Check if the element has text or not
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen1');

    //Check if the element has attribute or not
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    //Check page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The Kitchen');
    await expect(page).toHaveTitle(/.*Kitchen/);

    //This is visiual validation with screenshot
    await page.pause();
    await expect(page).toHaveScreenshot();
});
// @ts-check
import { test, expect } from '@playwright/test';
let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({
    screenshots: true,
    snapshots: true
  });
  page = await context.newPage();
});

test.afterAll(async () => {
  await context.tracing.stop({ path: 'example3.spec.zip' });
});


test('has title', async ({ context }) => {
  //await context.tracing.start({
  //  screenshots: true,
  //  snapshots: true
  //});

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  //await context.tracing.stop({ path: 'example.spec.zip' });
});

test('get started link', async ({}) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
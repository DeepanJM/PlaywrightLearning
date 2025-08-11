import { test, expect } from '@playwright/test';

/*This is a import and output of data data from a module
const {hello, helloworld } = require('./demo/hello.js');
import { hello, helloworld } from './demo/hello.js';
console.log (hello());
console.log(helloworld());*/

//Simple test creation structure
//test('My First Test', () => {})

//Page Instance Fixture
test('My First Test', async ({ page }) => {
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle(/Google/);
})
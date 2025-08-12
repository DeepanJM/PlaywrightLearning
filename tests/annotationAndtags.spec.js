import { test } from '@playwright/test';

test.skip('Test One', async({page}) => {
    
});

test('not yet ready', async({page}) => {
    test.fail();
});

test.fixme('Tests to be fixed', async({page}) => {
    // This test is not ready yet
});

test('Slow Test', async({page}) => {
    test.slow();
    // This test is expected to take longer than usual
});

test.only('Only Test', async({page}) => {
    // This test will be the only one executed
});

//Tags
test('Test login page @smoke', async({page}) => {
    // This test is tagged as fast
});
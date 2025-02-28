import { test, expect } from '@playwright/test';

test.describe('Cart Functionality', () => {

    test('Add Single Product to Cart', async ({ page }) => {
        //navigate to the SauceDemo login page
        await page.goto('/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        //Add a product
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();        
        //Verify product in Cart
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill('Tester');
        await page.locator('[data-test="lastName"]').fill('QA');
        await page.locator('[data-test="postalCode"]').fill('87300');
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="pony-express"]')).toBeVisible();
        await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
    });

});
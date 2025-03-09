import { test, expect } from '@playwright/test';
import { login } from '../utils/auth';

test.describe('Checkout tests', () => {
    test('Add a single product to the cart', async ({ page }) => {
        await login(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();  
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await expect(page.locator('[data-test="item-quantity"]')).toBeVisible();
    });

    test('Add multiple products to the cart', async ({ page }) => {
        await login(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await expect(page.locator('[data-test="cart-list"] div').filter({ hasText: '1Sauce Labs Backpackcarry.' }).locator('[data-test="item-quantity"]')).toBeVisible();
        await expect(page.locator('[data-test="cart-list"] div').filter({ hasText: '1Sauce Labs Bike LightA red' }).locator('[data-test="item-quantity"]')).toBeVisible();
    });

    test('Checkout with a single product', async ({ page }) => {
        await login(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await expect(page.locator('[data-test="cart-list"] div').filter({ hasText: '1Sauce Labs Backpackcarry.' }).locator('[data-test="item-quantity"]')).toBeVisible();
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

    test('Checkout with a multiple product', async ({ page }) => {
        await login(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await expect(page.locator('[data-test="cart-list"] div').filter({ hasText: '1Sauce Labs Backpackcarry.' }).locator('[data-test="item-quantity"]')).toBeVisible();
        await expect(page.locator('[data-test="cart-list"] div').filter({ hasText: '1Sauce Labs Bike LightA red' }).locator('[data-test="item-quantity"]')).toBeVisible();
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
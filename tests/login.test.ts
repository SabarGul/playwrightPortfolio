import { test, expect } from '@playwright/test';
test.describe('Login Tests', () => {
    test('Edge Cases testing', async ({ page }) => {
        // Navigate to the SauceDemo login page
        await page.goto('/');
        await expect(page.getByText('Swag Labs')).toBeVisible();
        //with empty credentials
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        //Wrong Username - Right password
        await page.locator('[data-test="username"]').fill("1234567");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        //Right Username - wrong password
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("1234567890");
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible()
        //Wrong Username - Wrong password
        await page.locator('[data-test="username"]').fill("qwertyuiop");
        await page.locator('[data-test="password"]').fill("1234567890");
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();

    // await page.close();
    });

    test('Login to SauceDemo and logout', async ({ page }) => {
        //Navigate to the SauceDemo login page
        await page.goto('/');
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        //await page.close();

        //Clear button working test
        await page.locator('svg').first()
    });

});
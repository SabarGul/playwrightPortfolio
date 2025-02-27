import { test, expect } from '@playwright/test';

test('Title of expedia.com', async ({page})=>{
    await page.goto('https://www.expedia.com');
    expect(await page.title()).toBe('Expedia Travel: Vacation Homes, Hotels, Car Rentals, Flights & More')
});
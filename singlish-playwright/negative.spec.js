import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Joined words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mamagedharayanavaa');
  await expect(page.locator('textarea').nth(1)).not.toBeEmpty();
});
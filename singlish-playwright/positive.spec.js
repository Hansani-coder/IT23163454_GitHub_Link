import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert simple sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama gedhara yanavaa');
  await expect(page.locator('textarea').nth(1)).toContainText('මම');
});

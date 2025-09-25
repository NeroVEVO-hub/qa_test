const { test, expect } = require('@playwright/test');

test.describe('Проверка заголовка страницы Playwright', () => {
  ['chromium', 'firefox'].forEach(browserName => {
    test(`Заголовок должен содержать "Playwright" в браузере ${browserName}`, async ({ page }) => {
      await page.goto('https://playwright.dev/');
      const title = await page.title();
      expect(title).toContain('Playwright');
    });
  });
});
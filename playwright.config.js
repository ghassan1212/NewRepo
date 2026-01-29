const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // folder containing your test files
  reporter: [
    ['list'], // optional, shows console output
    ['allure-playwright', { outputFolder: 'allure-results' }] // THIS ensures results go to allure-results
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});

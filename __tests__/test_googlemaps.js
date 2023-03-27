const puppeteer = require('puppeteer');

  describe('Page About Us', () => {
    let browser;

    beforeAll(async () => {
      browser = await puppeteer.launch();
    });

    afterAll(async () => {
      await browser.close();
    });

    test('should display Google Maps', async () => {
      const page = await browser.newPage();
      await page.goto('/aboutus.html');
      await page.waitForSelector('#google-maps');
      const map = await page.$('#google-maps');
      expect(map).toBeDefined();
    });
  });


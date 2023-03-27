const puppeteer = require('puppeteer');

describe('Google Maps', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should load Google Maps', async () => {
    await page.goto('/contactus');
    await page.waitForSelector('#map');

    const mapTitle = await page.title();
    expect(mapTitle).toContain('Google Maps');

    const mapIframe = await page.$('#map iframe');
    expect(mapIframe).not.toBeNull();
  });
});



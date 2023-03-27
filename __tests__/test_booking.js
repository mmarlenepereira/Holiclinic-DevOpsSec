const puppeteer = require('puppeteer');

describe('Booking Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Page Loads', async () => {
    await page.goto('http://localhost:4000/booking.html');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Booking Page');
  });

  test('Can Book Appointment', async () => {
    await page.goto('http://localhost:4000/booking.html');
    await page.type('#name', 'John Doe');
    await page.type('#email', 'johndoe@gmail.com');
    await page.type('#date', '2023-03-30');
    await page.click('#book-appointment');
    const successMessage = await page.$eval('#success-message', el => el.innerText);
    expect(successMessage).toBe('Appointment booked successfully!');
  });

  test('Can Cancel Appointment', async () => {
    await page.goto('http://localhost:4000/booking.html');
    await page.type('#name', 'John Doe');
    await page.type('#email', 'johndoe@gmail.com');
    await page.type('#date', '2023-03-30');
    await page.click('#book-appointment');
    await page.click('#cancel-appointment');
    const successMessage = await page.$eval('#success-message', el => el.innerText);
    expect(successMessage).toBe('Appointment cancelled successfully!');
  });
});

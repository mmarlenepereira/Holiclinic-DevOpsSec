const request = require('supertest');
const app = require('../app'); // replace this with the path to your app file
const cheerio = require('cheerio');

describe('aboutus.html', () => {
  test('Google Maps should load correctly', async () => {
    const response = await request(app).get('/aboutus.html');
    expect(response.statusCode).toBe(200);

    const $ = cheerio.load(response.text);
    const iframeSrc = $('iframe').attr('src');

    expect(iframeSrc).toMatch(/^https:\/\/www\.google\.com\/maps\/embed\?pb=.+/);
  });
});





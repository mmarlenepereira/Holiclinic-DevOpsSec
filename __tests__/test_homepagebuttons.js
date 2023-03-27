const request = require('supertest');
const app = require('../app');

describe('Test button routing', () => {
  test('should redirect to booking page', async () => {
    const response = await request(app).get('/booking');
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe('/booking.html');
  });

  test('should redirect to about us page', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe('/aboutus.html');
  });
});
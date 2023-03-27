const app = require('../app');
const request = require('supertest');

describe('Booking page', () => {
  test('should display the Calendly form', async () => {
    const res = await request(app).get('/booking.html');
    expect(res.status).toBe(200);
    expect(res.text).toContain('calendly-widget');
  });
});

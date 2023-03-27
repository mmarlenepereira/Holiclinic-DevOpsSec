const app = require('../app'); // Assuming you have an express app defined in app.js
const request = require('supertest');
const chai = require('chai');

describe('Booking page', () => {
  it('should display the Calendly form', async () => {
    const res = await request(app).get('/booking.html');
    chai.expect(res.status).to.equal(200);
    chai.expect(res.text).to.include('calendly-widget');
  });
});

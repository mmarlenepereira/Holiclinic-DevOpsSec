const request = require('supertest');
const app = require('../app');

describe('Test button routing', () => {
  it('should redirect to booking page', (done) => {
    request(app)
      .get('/booking')
      .expect('Location', '/booking.html')
      .expect(302, done);
  });

  it('should redirect to about us page', (done) => {
    request(app)
      .get('/about')
      .expect('Location', '/aboutus.html')
      .expect(302, done);
  });
});


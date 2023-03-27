const request = require('supertest');
const app = require('../app');

describe('Test link functionality', () => {
  it('should return a 200 response for the homepage', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return a 404 response for a non-existent page', (done) => {
    request(app)
      .get('/non-existent-page')
      .expect(404, done);
  });
});

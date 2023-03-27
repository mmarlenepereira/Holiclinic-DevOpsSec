const app = require('../app');
const request = require('supertest');

describe('aboutus.html', () => {
  let server;
  beforeAll(() => {
    server = app.listen(9000); // Change port number to 9000
    console.log('Server started on port 9000');
  });

  afterAll((done) => {
    server.close(done);
  });

  it('Google Maps should load correctly', async () => {
    const response = await request(server).get('/aboutus.html');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('Google Maps');
  });
});

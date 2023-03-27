const request = require('supertest');
const app = require('../app');
const PORT = 3003; // Define a different port number for each test file to prevent conflicts
let server;

beforeEach((done) => {
    server = app.listen(PORT, () => {
      global.agent = request.agent(`http://localhost:${PORT}`); // Use the specified port number
      done();
    });
  });

  afterEach((done) => {
    return server && server.close(done);
  });


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

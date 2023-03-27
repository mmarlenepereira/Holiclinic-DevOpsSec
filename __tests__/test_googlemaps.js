//test is there is an embedded google maps on the page

const request = require('supertest');
const app = require('../app');
const PORT = 4000; // Define a different port number for each test file to prevent conflicts
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

describe('Contact Us Page', () => {
  it('should display embedded google maps', async () => {
    const response = await request(app)
      .get('/contactus.html');

    expect(response.status).toEqual(200);
    expect(response.text).toContain('https://www.google.com/maps/embed?pb');
  });
});

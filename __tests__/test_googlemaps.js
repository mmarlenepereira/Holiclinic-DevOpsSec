//test is there is an embedded google maps on the page

const request = require('supertest');
const app = require('../app');
let server;

beforeEach((done) => {
  server = app.listen(0, () => {
    const port = server.address().port;
    global.agent = request.agent(`http://localhost:${port}`);
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

//gtest if there is a calendly widget on the page

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

describe('Booking page', () => {
  it('contains Calendly widget', () => {
    const bookingHtml = fs.readFileSync(path.join(__dirname, '/booking.html'), 'utf8');
    const widgetElement = '<div class="calendly-inline-widget"';
    expect(bookingHtml).toContain(widgetElement);
  });
});

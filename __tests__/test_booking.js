//test to confrim there is a calendly widget on the page

const request = require('supertest');
const app = require('../app');
const PORT = 8000; // Define a different port number for each test file to prevent conflicts
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

describe('Booking page', () => {
  it('contains Calendly widget', () => {
    const bookingHtml = fs.readFileSync(path.join(__dirname, '/booking.html'), 'utf8');
    const widgetElement = '<div class="calendly-inline-widget"';
    expect(bookingHtml).toContain(widgetElement);
  });
});


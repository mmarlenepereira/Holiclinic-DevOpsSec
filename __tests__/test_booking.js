//tests whether there is a Calendly script on the page or not

const request = require('supertest');
const assert = require('assert');

describe('Booking page', function() {
  it('should include the Calendly script', function(done) {
    request('http://localhost:4000')
      .get('/booking.html')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.text.includes('calendly.com/assets/external/widget.js'), 'Calendly script is not included');
        done();
      });
  });
});

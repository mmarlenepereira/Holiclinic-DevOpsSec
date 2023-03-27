const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/booking', (req, res) => {
  res.redirect('/booking.html');
});

app.get('/about', (req, res) => {
  res.redirect('/aboutus.html');
});

// Set up middleware and routes
module.exports = app;






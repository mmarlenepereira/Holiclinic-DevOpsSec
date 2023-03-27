const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 4000');
});

// Set up middleware and routes
module.exports = app;



const data = require('../data/cart-contents.json');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://fonts.googleapis.com");
  return next();
});
app.use(cors());

app.get('/cart', function (req, res) {
  res.status(200).send(data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
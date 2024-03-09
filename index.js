const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'))
app.use(express.urlencoded());

app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server :", err);
  }
  console.log("Server is running on port", port);
})
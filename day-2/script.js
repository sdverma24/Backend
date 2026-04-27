const express = require('express');

const app = express(); // instance of server created

app.get('/', (req, res) => {
  res.send('Hello World!'); // response sent to client
});

app.get('/about', (req, res) => {
  res.send('Hello World!! on about page'); // response sent to client
});

app.get('/recent', (req, res) => {
  res.send('Hello World!!  about page'); // response sent to client
});

app.get('/contact', (req, res) => {
  res.send('Hello World!! on contact page'); // response sent to client
});

app.get('/help', (req, res) => {
  res.send('Hello World!! on help page'); // response sent to client
});

app.listen(3000); // server listening on port 3000

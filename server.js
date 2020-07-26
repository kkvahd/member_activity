const express = require('express');
const path = require('path');

const app = express();

const data = require('./db.json');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/members', (req, res) => {
  res.header("Content-Type", 'application/json');
  res.send(JSON.stringify(data));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
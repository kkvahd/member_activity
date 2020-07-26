const express = require('express');
const path = require('path');

const app = express();

const data = require('./db.json');


app.get('/api/members', (req, res) => {
  res.header("Content-Type", 'application/json');
  res.send(JSON.stringify(data));
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

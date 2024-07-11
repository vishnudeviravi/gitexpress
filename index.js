const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  console.log('hello user');
});

app.listen(4000, () => {
  console.log('Working');
});

const express = require('express');

const app = express();

app.listen(3001, (err) => {
  if (err) console.log('Connection Failed', err);
  console.log('Connection Succesfull');
});

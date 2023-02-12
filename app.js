const express = require('express');
const app = express();
require('./config/Connection');
require('dotenv').config();

app.get('/', (req, res) => {
  res.status(200).json({ info: 'Congratulations ! You are here.' });
});

app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log('Connection Failed', err);
  console.log(`Server Started Succesfully on ${process.env.APP_PORT}`);
});

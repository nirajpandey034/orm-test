const express = require('express');
const app = express();
const cors = require('cors');
const UserRoute = require('./routes/Users');
require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use(cors());

app.use('/users', UserRoute);

app.get('/', (req, res) => {
  res.status(200).json({ info: 'Congratulations ! You are here.' });
});

app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log('Connection Failed', err);
  console.log(`Server Started Succesfully on ${process.env.APP_PORT}`);
});

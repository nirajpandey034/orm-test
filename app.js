const express = require('express');
const app = express();
const cors = require('cors');
const UserRoute = require('./routes/Users');
const OrderRoute = require('./routes/Orders');
require('dotenv').config(); // for using env variables
require('./config/db'); // db connection

app.use(express.json());
app.use(cors());

app.use('/users', UserRoute);
app.use('/orders', OrderRoute);

app.get('/', (req, res) => {
  res.status(200).json({ info: 'Congratulations ! You are here.' });
});

app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log('Connection Failed', err);
  console.log(`Server Started Succesfully on ${process.env.APP_PORT}`);
});

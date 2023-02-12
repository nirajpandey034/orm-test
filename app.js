const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./config/db');

const User = require('./models/User.model');

app.use(express.json());
app.use(cors());

app.post('/createUser', (req, res) => {
  const { name, favoriteColor, age, cash } = req.body;
  User.create({
    name: name,
    favoriteColor: favoriteColor,
    age: age,
    cash: cash,
  })
    .then(() => res.status(201).send('User Created Succesfully'))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});
app.put('/updateUser', (req, res) => {
  const { name, age, cash } = req.body;

  User.update({ age: age, cash: cash }, { where: { name: name } })
    .then(() => res.status(201).send('User Updated Succesfully'))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});
app.get('/', (req, res) => {
  res.status(200).json({ info: 'Congratulations ! You are here.' });
});

app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log('Connection Failed', err);
  console.log(`Server Started Succesfully on ${process.env.APP_PORT}`);
});

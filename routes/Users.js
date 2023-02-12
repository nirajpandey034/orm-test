const express = require('express');
const router = express.Router();
require('dotenv').config();

const User = require('../models/User.model');

router.get('/getAllUsers', (req, res) => {
    User.findAll()
      .then((response) => {
        res.json({ data: response });
      })
      .catch((err) => {
        res.json({ err: err });
      });
  });
  router.post('/createUser', (req, res) => {
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
  router.put('/updateUser', (req, res) => {
    const { name, age, cash } = req.body;
  
    User.update({ age: age, cash: cash }, { where: { name: name } })
      .then(() => res.status(201).send('User Updated Succesfully'))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });
  router.delete('/deleteUser', (req, res) => {
    const { name } = req.body;
    User.destroy({
      where: { name: name },
    })
      .then(() => {
        res.json({ info: `User ${name} deleted` });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

  module.exports = router;
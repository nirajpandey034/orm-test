const express = require('express');
const router = express.Router();
require('dotenv').config();

const Orders = require('../models/Orders.model');

router.get('/getAllOrders', (req, res) => {
  Orders.findAll()
    .then((response) => {
      res.json({ data: response });
    })
    .catch((err) => {
      res.json({ err: err });
    });
});

module.exports = router;

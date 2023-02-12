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

router.post('/createOrder', (req, res) => {
  const { userID, productName, price, quantity, address } = req.body;

  Orders.create({
    userID: userID,
    productName: productName,
    price: price,
    quantity: quantity,
    address: address,
  })
    .then((response) => {
      res.json({ info: `#${response.id} Order Created Successfully` });
    })
    .catch((error) =>
      res.json({ error: 'Order Creation Failed' + error.message })
    );
});
module.exports = router;

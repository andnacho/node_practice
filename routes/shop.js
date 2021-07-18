const path = require('path');
const express = require('express');

const getView = require('../util/getView')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/', hasProducts: products.length > 0});
});

module.exports = router;
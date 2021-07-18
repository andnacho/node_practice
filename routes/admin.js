const express = require('express');
const path = require('path');

const getView = require('../util/getView')

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
})

module.exports.routes = router;
module.exports.products = products;
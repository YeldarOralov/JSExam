const express = require('express');
const router = express.Router();
const Product = require('../models/product-model.js');

router.post('/products', (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            })
        }
    });
});

router.get('/products', (req, res) => {
    Product.find({}, 'name price', (err, products) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send({ products: products });
        }
    });
});

router.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, 'name price', (err, product) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(product);
        }
    });
});

router.put('/products/:id', (req, res) => {
    Product.findById(req.params.id, 'name price', (err, product) => {
        if (err) {
            console.log(err);
        }
        else {
            if (req.body.name) {
                product.name = req.body.name;
            }
            if (req.body.price) {
                product.price = req.body.price;
            }
            product.save(err => {
                if (err) {
                    res.sendStatus(500);
                }
                else {
                    res.sendStatus(200);
                }
            });
        }
    });
});

router.delete('/products/:id', (req, res) => {
    Product.remove({ _id: req.params.id }, err => {
        if (err) {
            res.sendStatus(500);
        } 
        else {
            res.sendStatus(200);
        }
    });
});
module.exports = router;
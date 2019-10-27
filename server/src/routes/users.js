const express = require('express');
const router = express.Router();
const User = require('../models/user-model.js');

router.post('/users', (req, res) => {
    const user = new User({
        login: req.body.login,
        password: req.body.password,
        isAdmin:req.body.isAdmin
    });
    user.save((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            });
        }
    });
});

router.get('/users', (req, res) => {
    User.find({}, 'login password isAdmin', (err, users) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send({ users: users });
        }
    });
});

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, 'login password isAdmin', (err, user) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(user);
        }
    });
});

router.put('/users/:id', (req, res) => {
    User.findById(req.params.id, 'login password isAdmin', (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (req.body.login) {
                user.login = req.body.login;
            }
            if (req.body.password) {
                user.password = req.body.password;
            }
            if (req.body.isAdmin) {
                user.isAdmin = req.body.isAdmin;
            }
            user.save(err => {
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

router.delete('/users/:id', (req, res) => {
    User.remove({ _id: req.params.id }, err => {
        if (err) {
            res.sendStatus(500);
        } 
        else {
            res.sendStatus(200);
        }
    });
});
module.exports = router;

const express = require('express');
const path = require('path')

const router = express.Router();
let users = [
    { "email": "anamol.anoj@gmail.com", "password": "123", "username": "user1" },
    { "email": "akshada@outlook.com", "password": "123", "username": "user2" },
]


router.get('', (req, res, next) => {
    res.sendFile((path.join(__dirname, '..', 'views', 'users.html')));
})
router.post('',express.urlencoded({ extended: true }), (req, res, next) => {
    console.log("User has been added");
    console.log(users);
    res.sendFile((path.join(__dirname, '..', 'views', 'users.html')));
})

module.exports = router;
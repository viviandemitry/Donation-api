const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

console.log("entrei")

router.post('/', loginController.postLoginController);

module.exports = router;

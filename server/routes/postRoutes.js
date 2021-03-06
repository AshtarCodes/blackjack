const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth') 
const { ensureAuth } = require("../middleware/auth");


router.post('/signup', authController.postSignup)

module.exports = router;
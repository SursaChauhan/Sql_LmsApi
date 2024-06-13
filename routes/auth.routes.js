const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', [
  check('email').isEmail(),
  check('password').isLength({ min: 6 }),
  check('role_id').isInt()
], authController.register);

router.post('/login', [
  check('email').isEmail(),
  check('password').not().isEmpty()
], authController.login);

module.exports = router;

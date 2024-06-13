const express = require('express');
const userController = require('../controllers/user.controller');
const authenticateToken = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/enroll', authenticateToken, userController.enrollCourse);
router.post('/progress', authenticateToken, userController.trackProgress);

module.exports = router;

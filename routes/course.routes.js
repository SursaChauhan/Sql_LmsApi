const express = require('express');
const courseController = require('../controllers/course.controller');
const authenticateToken = require('../middleware/auth.middleware');
const isTeacher = require('../middleware/role.middleware');

const router = express.Router();

router.post('/', authenticateToken, isTeacher, courseController.createCourse);
router.delete('/:id', authenticateToken, isTeacher, courseController.deleteCourse);

module.exports = router;

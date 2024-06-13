const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const { title, description } = req.body;
    const teacherId = req.user.userId;
console.log("teacherId",teacherId)
    try {
        const course = await Course.create({
            title,
            description,
            teacher_id: teacherId
        });

        res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Failed to create course' });
    }
};

exports.deleteCourse = async (req, res) => {
    const courseId = req.params.id;
    const teacherId = req.user.userId;

    try {
        const course = await Course.findOne({ where: { id: courseId, teacher_id: teacherId } });

        if (!course) {
            return res.status(404).json({ message: 'Course not found or not authorized' });
        }

        await course.destroy();
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ error: 'Failed to delete course' });
    }
};

const pool = require('../config/dbConfig');

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  const teacherId = req.user.userId;

  try {
    await pool.query(
      'INSERT INTO courses (title, description, teacher_id) VALUES (?, ?, ?)',
      [title, description, teacherId]
    );
    res.status(201).json({ message: 'Course created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  const teacherId = req.user.userId;

  try {
    const [results] = await pool.query('DELETE FROM courses WHERE id = ? AND teacher_id = ?', [courseId, teacherId]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Course not found or not authorized' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

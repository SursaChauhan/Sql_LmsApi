const pool = require('../config/dbConfig');

exports.enrollCourse = async (req, res) => {
  const { course_id } = req.body;
  const userId = req.user.userId;

  try {
    await pool.query(
      'INSERT INTO enrollment_table (user_id, course_id) VALUES (?, ?)',
      [userId, course_id]
    );
    res.status(201).json({ message: 'Enrolled in course successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.trackProgress = async (req, res) => {
  const { course_id, course_status } = req.body;
  const userId = req.user.userId;

  try {
    await pool.query(
      'INSERT INTO progress_level (user_id, course_id, course_status) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE course_status = ?',
      [userId, course_id, course_status, course_status]
    );
    res.status(201).json({ message: 'Progress updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

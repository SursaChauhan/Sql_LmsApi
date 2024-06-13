const isTeacher = (req, res, next) => {
    if (req.user.roleId !== 1) return res.sendStatus(403); // Assuming role_id 1 is for teachers
    next();
  };
  
  module.exports = isTeacher;
  
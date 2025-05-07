const db = require('../config/database');

// Get all students
exports.getAllStudents = (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Create a new student
exports.createStudent = (req, res) => {
  const { name, course } = req.body;
  db.query('INSERT INTO students (name, course) VALUES (?, ?)', [name, course], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, name, course });
  });
};

// Update student
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, course } = req.body;
  db.query('UPDATE students SET name = ?, course = ? WHERE id = ?', [name, course, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Student updated successfully' });
  });
};

// Delete student
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM students WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Student deleted successfully' });
  });
};

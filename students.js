const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Dummy student data
let students = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' }
];

// GET all students (protected)
router.get('/', authenticateToken, (req, res) => {
  res.json(students);
});

// ADD student (protected)
router.post('/', authenticateToken, (req, res) => {
  const student = req.body;
  student.id = students.length + 1;
  students.push(student);
  res.status(201).json(student);
});

// DELETE student (protected)
router.delete('/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
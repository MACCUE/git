const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// MySQL connection (CHANGE PASSWORD)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5050',  // ← Put your MySQL root password here
  database: 'exam_bank'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

// Student dashboard - real database
app.get('/api/exams', (req, res) => {
  db.query('SELECT * FROM exams WHERE approved = TRUE', (err, results) => {
    res.json(results);
  });
});

// Login (simple for demo)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server running: http://localhost:3000');
});

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashed]
    );
    res.send('User registered');
  } catch (err) {
    res.status(400).send('User already exists or error');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  if (result.rows.length === 0) return res.status(401).send('Invalid username');
  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Invalid password');
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

function authenticate(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth) return res.sendStatus(401);
  const token = auth.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/dashboard', authenticate, (req, res) => {
  res.send('Welcome to your secure dashboard!');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

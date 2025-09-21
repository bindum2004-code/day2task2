const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' })); // allow Vite frontend
app.use(express.json());

let users = []; // simple in-memory "database"

// Signup route
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  res.status(201).json({ message: 'User created', user: { name, email } });
});

// Signin route
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ token: 'dummy-token', user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Profile route
app.get('/api/users/me', (req, res) => {
  // normally you'd verify the token
  res.json({ user: users[0] || null });
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

let users = [
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'John', email: 'john@example.com' }
];

// GET
app.get('/get_many_data', (req, res) => {
  res.json(users);
});

// POST
app.post('/data_from_react', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: 'User added successfully', user: newUser });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

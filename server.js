const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the JWT-Protected Student API!');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
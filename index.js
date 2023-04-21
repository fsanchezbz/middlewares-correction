const express = require('express');
const app = express();
const secure = require('./middlewares/secure');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Middlewares time!'));

app.get('/verify/:token', secure, (req, res) =>
  res.send('Token is looking goooood!')
);

app.listen(port, () => console.log(`Server running on port ${port}`));

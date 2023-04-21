require('dotenv').config();
const express = require('express');
const app = express();
const { tokenRouter, userRouter, verifyRouter } = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 8000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => res.send('Middlewares time!'));

app.use('/users', userRouter);
app.use('/token', tokenRouter);
app.use('/verify', verifyRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

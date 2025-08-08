require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const STATIC_DIR = process.env.STATIC_DIR || './client';

app.use(express.static(path.resolve(__dirname, STATIC_DIR)));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, STATIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

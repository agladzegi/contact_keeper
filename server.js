require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${5000}`)
);

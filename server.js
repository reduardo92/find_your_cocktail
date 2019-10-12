const log = console.log;

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Init Cors
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

// define Routes
app.use('/home', require('./routes/home'));
app.use('/drinks', require('./routes/fullDrinks'));
app.use('/drink', require('./routes/drinks'));
app.use('/ingredients', require('./routes/ingredients'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => log(`server started on port ${PORT}`));

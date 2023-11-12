const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/users');

const app = express();

// bodyParser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// db config
const db = require('./config/keys.js').mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

// Passport middleware config
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));

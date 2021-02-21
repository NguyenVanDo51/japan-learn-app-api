const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

const postsRoute = require('./routes/post');

app.use(bodyParser.json());
// app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('This is Home pape');
});

// connect to db
mongoose.connect(
  'mongodb+srv://root:root@cluster0.s34de.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log('connected to db');
});

app.listen(3000);

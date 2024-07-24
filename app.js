const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

mongoose.connect('mongodb://localhost/todoapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

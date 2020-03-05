let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

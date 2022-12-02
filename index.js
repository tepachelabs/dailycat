const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const index = express();
// require('./scheduler');
require('./db');

// view engine setup
index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'pug');

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(cookieParser());
index.use(express.static(path.join(__dirname, 'public')));

index.use('/', indexRouter);

// catch 404 and forward to error handler
index.use(function (req, res, next) {
  next(createError(404));
});

// error handler
index.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = index;

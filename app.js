var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var cusine=require('./routes/cusine_routes');
var dish=require('./routes/dish_routes');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bill=require('./routes/bill_tbl_routes');
var billdetails=require('./routes/bill_details_routes');
var pastorder=require('./routes/past_order_routes');
var past=require('./routes/past_order_routes1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());
app.use('/cusine',cusine);
app.use('/dish',dish);
app.use('/bill',bill);
app.use('/billdetails',billdetails);
app.use('/pastorder',pastorder);
app.use('/past',past);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//-- Expess is a functoin that upon calling add methods to app variable
const app = express();
app.use(express.json());

// 1 MIDDLEWARES
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('🐛 Middware is called');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3 ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

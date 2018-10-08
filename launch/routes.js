const express = require('express');
const login = require('../routes/login');

module.exports = app => {
  app.use(express.json());
  app.use('/login', login);
}
const express = require('express');
const login = require('../routes/login');

module.exports = app => {

  app.use(express.json());

  app.use(express.static('client'));

  app.use('/login', login);

  app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404. Page not found</h1>');
  });

}
// const express = require('express');
// const router = express.Router();

// const controller = require('../controllers/controller');

// module.exports = router;

// router.get('/', controller.findAll);
// router.get('/:UserID', controller.getUserData);
// router.post('/post', controller.postUserData);
// router.put('/:UserID/put', controller.putUserData);
// router.delete('/:UserID/delete', controller.deleteUserData);


'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/image', require('./api/upload'));
  app.use('/api/user', require('./api/user'));
  app.use('/api/query', require('./api/common'));
  app.use('/auth', require('./auth'));
  app.use('/api/activity', require('./api/activity'));
};
const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

module.exports = router;

router.get('/', controller.findAll);
router.get('/:UserID', controller.getUserData);
router.post('/post', controller.postUserData);
router.put('/:UserID/put', controller.putUserData);
router.delete('/:UserID/delete', controller.deleteUserData);



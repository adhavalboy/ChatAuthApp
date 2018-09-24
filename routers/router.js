const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

module.exports = router;

router.get('/', controller.findAll);
router.get('/:UserId', controller.getUserData);
router.post('/post', controller.postUserData);
router.put('/:UserId/put', controller.putUserData);
router.delete('/:UserId/delete', controller.deleteUserData);
//router.get('/', controller.findAll);
//router.get('/:id/fetchData', controller.getData);
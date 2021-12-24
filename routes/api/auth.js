const express = require('express');
const router = express.Router();

const { joiSchema } = require('../../models/user');
const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const { usersControllers } = require('../../controllers');

router.post('/signup', validation(joiSchema), controllerWrapper(usersControllers.signup));
router.post('/login', validation(joiSchema), controllerWrapper(usersControllers.login));
router.post('/logout', authenticate, controllerWrapper(usersControllers.logout));
router.get('/current', authenticate, controllerWrapper(usersControllers.current));

module.exports = router;

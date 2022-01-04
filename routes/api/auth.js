const express = require('express');
const router = express.Router();

const { joiSchema } = require('../../models/user');
const { validation, authenticate,upload } = require('../../middlewares');
const { usersControllers } = require('../../controllers');

router.post('/signup', validation(joiSchema), usersControllers.signup);
router.get('/verify/:verificationToken', usersControllers.verify);
router.post('/verify', usersControllers.reverification);
router.post('/login', validation(joiSchema), usersControllers.login);
router.post('/logout', authenticate, usersControllers.logout);
router.get('/current', authenticate, usersControllers.current);
router.patch('/avatars',[authenticate,upload.single('avatar')],usersControllers.addAvatar)

module.exports = router;

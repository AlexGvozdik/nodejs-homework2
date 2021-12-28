const express = require("express");
const router = express.Router();

const { controllerWrapper, validation,authenticate} = require("../../middlewares");
const { contactsControllers } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contact");



router.get("/", controllerWrapper(contactsControllers.getAll));

router.get("/:contactId",authenticate, controllerWrapper(contactsControllers.getContactById ));

router.post("/",authenticate, validation(joiSchema, "missing required name field"), controllerWrapper(contactsControllers.addContact));

router.delete("/:contactId",authenticate, controllerWrapper(contactsControllers.deleteContact));

router.put("/:contactId",authenticate, validation(joiSchema, "missing fields"), controllerWrapper(contactsControllers.updateContact));

router.patch("/:contactId",authenticate,validation(updateActiveJoiSchema, "missing field favorite"), controllerWrapper(contactsControllers.updateStatusContact));

module.exports = router;
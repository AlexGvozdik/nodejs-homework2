const express = require("express");
const router = express.Router();

const { controllerWrapper, validation} = require("../../middlewares");
const { contactsControllers } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contact");



router.get("/", controllerWrapper(contactsControllers.getAll));

router.get("/:contactId", controllerWrapper(contactsControllers.getContactById ));

router.post("/", validation(joiSchema, "missing required name field"), controllerWrapper(contactsControllers.addContact));

router.delete("/:contactId", controllerWrapper(contactsControllers.deleteContact));

router.put("/:contactId", validation(joiSchema, "missing fields"), controllerWrapper(contactsControllers.updateContact));

router.patch("/:contactId",validation(updateActiveJoiSchema, "missing field favorite"), controllerWrapper(contactsControllers.updateStatusContact));

module.exports = router;
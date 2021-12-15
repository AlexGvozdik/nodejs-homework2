const express = require('express')
const router = express.Router()
const {notFound} = require("http-errors")
const contactsOperations = require('../../model/contacts')
const Joi = require("joi")
const contactSchema = Joi.object({
    "name": Joi.string().min(1).required(),
    "email": Joi.string().min(1).required(),
    "phone": Joi.string().min(1).required()
})

router.get('/', async (req, res, next) => {
  try {
    const contacts = contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result:contatcs
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.getContactById(id)
    if (!result) {
      throw new notFound(`Contact with id=${id} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      error.status= 400;
      throw error;
    }
    const { id } = req.params;
    const result = await contactsOperations.updateContactById(id, req.body);
    if (!result) {
      throw new notFound(`Contact with id=${id} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.removeContactById(id);
    if (!result) {
      throw new notFound(`Contact with id=${id} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      message:"contact deleted",
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router;

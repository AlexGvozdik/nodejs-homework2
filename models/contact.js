const { Schema, model, SchemaTypes } = require('mongoose');
const Joi = require('joi');

const contactSchema = ({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        required: true,
        unique:true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref:'user'
    }
}, { versionKey: false ,timestamps:true});

const joiSchema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    phone: Joi.string().min(1).required(),
    favorite: Joi.boolean()
});

const updateActiveSchema = Joi.object({
    favorite: Joi.boolean().required()
});

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    joiSchema,
    updateActiveSchema
}
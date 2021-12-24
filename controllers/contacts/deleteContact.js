const { sendSuccessfullRes } = require('../../helpers');
const { NotFound } = require("http-errors");
const { Contact } = require('../../models');

const deleteContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw new NotFound(404,`Contact with id=${contactId} not found`)
    }
    sendSuccessfullRes(res, {message:'Successful delete operation'})
}

module.exports = deleteContact;
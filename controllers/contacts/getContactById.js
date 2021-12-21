const { sendSuccessfullRes } = require('../../helpers');
const { NotFound } = require("http-errors");
const { Contact } = require('../../models');

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId, '_id name email favorite');
    if (!result) {
        throw new NotFound(404,`Contact with id=${contactId} not found`)
    }
    sendSuccessfullRes(res, { result });
}

module.exports = getContactById;
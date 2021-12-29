const { sendSuccessfullRes } = require('../../helpers');
const { NotFound } = require("http-errors");
const { Contact } = require('../../models');

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const userId = req.user.id;
    const result = await Contact.findById({_id:contactId,owner:userId}, '_id name email phone favorite');
    if (!result) {
        throw new NotFound(404,`Contact with id=${contactId} not found`)
    }
    sendSuccessfullRes(res, { result });
}

module.exports = getContactById;
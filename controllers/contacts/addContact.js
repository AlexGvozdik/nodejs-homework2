const { sendSuccessfullRes } = require('../../helpers');
const { Contact } = require('../../models');

const addContact = async (res, req) => {
    const result = await Contact.create(req.body);
    sendSuccessfullRes(res, { result });
}

module.exports = addContact;
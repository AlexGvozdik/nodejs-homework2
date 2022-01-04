const { sendSuccessfullRes } = require('../../helpers');
const { Contact } = require('../../models');

const addContact = async (res, req) => {
    const userId = req.user.id;
    const result = await Contact.create({owner:userId,...req.body});
    sendSuccessfullRes(res, { result },201);
}

module.exports = addContact;
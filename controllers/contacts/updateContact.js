const { sendSuccessfullRes } = require('../../helpers');
const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const userId = req.user.id;
    const result = await Contact.findByIdAndUpdate(
        { _id: contactId, owner: userId },
        { ...req.body },
        { new: true }
    );
    if (!result) {
        throw new NotFound(404, `Contact with id=${contactId} not found`);
    }
    sendSuccessfullRes(res, { result });
}

module.exports = updateContact;

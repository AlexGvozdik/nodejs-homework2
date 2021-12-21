const getAll = require('./getAll');
const addContact = require('./addContact');
const getContactById = require('./getContactById');
const deleteContact = require('./deleteContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact')

module.exports = {
    getAll,
    addContact,
    getContactById,
    deleteContact,
    updateContact,
    updateStatusContact
}
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact")
const updateContactById = require("./updateContactById")
const removeContactById = require("./removeContactById")

module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContactById,
    removeContactById
}
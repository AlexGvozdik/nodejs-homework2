const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async (id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    }
    const newContacts = contacts.filter(item => item.id !== id);
    await updateContacts(newContacts);
    return contacts[idx];
}

module.exports = removeContactById;
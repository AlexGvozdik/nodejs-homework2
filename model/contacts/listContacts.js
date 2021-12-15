const fs = require("fs/promises");
// = require("");
const filePath = require("./filePath");

const listContacts = async () => {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
};

module.exports = listContacts;

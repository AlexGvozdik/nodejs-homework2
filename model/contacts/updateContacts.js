const fs = require("fs/promises");
const filePath = require("./filePath");

const updateContacts = async (products) => {
    await fs.writeFile(filePath, JSON.stringify(products));
}

module.exports = updateContacts;
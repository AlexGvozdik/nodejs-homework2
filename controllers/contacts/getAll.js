const { sendSuccessfullRes } = require('../../helpers');
const { Contact } = require('../../models');

const getAll = async(req,res) => {
    const result = await Contact.find({}, "_id name email favorite");
    sendSuccessfullRes(res,{result})
}

module.exports = getAll;
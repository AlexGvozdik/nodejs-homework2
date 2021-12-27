const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const { User } = require('../../models');
const avatarDir = path.join(__dirname, "../..", "public/avatars");

const addAvatar = async (req, res) => {
    try {
        const { path: tempStorage, originalname } = req.file;
        const id = req.user._id;
        const [extention] = originalname.split(".").reverse();
        const newFileName = `avatar_${id.toString()}.${extention}`;
        const resultStorage = path.join(avatarDir, newFileName);

        const file = await Jimp.read(tempStorage);
        await file.resize(250, 250).write(tempStorage);
        await fs.rename(tempStorage, resultStorage);

        const avatarURL = path.join("/avatars", newFileName);
        await User.findByIdAndUpdate(id, { avatarURL }, { new: true });
        res.status(200).json({
            result:avatarURL
        })
    } catch (error) {
        await fs.unlink(tempStorage);
        throw error;
    }
}
module.exports = addAvatar;
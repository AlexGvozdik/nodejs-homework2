const { NotFound} = require("http-errors");
const { User } = require("../../models");

const verify = async (req, res) => {
    try {
        const { verificationToken } = req.params;
        const user = await User.findOne({ verifyToken: verificationToken });
        if (!user) {
            throw new NotFound("Verify error")
        };

        await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true });
        res.status(200).json({
            message: "Verification successful",
        });
    } catch(error) {
        req.status(404).json(error);
    }    
};

module.exports = verify;
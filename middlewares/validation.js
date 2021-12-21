const validation = (schema, messageErr) => {
    return async(req, res, next)=> {
        const {error} = schema.validate(req.body);
        if(error){
            res.status(400).json({
                status: "error",
                code: 400,
                message:`${messageErr}`
            });
            return;
        }
        next();
    }
};

module.exports = validation;
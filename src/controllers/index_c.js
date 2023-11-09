module.exports = {
    index: async (req,res,next) => {
        try {
            res.render("index");
        } catch (error) {
            next(error);
        };
    }
}
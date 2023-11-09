const word = require("../models/word_m.js");

module.exports = {
    environment: async (req,res,next) => {
        try {
            const data = await word.getAllVocab();
            res.render("environment_words",{data: data});
        } catch (error) {
            next(error);
        };
    }
}
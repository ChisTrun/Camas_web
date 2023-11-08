const word = require("../models/word_m.js");

module.exports = {
    home: async (req,res,next) => {
        try {
            const data = await word.getAllVocab();
            res.render("home",{data: data});
        } catch (error) {
            next(error);
        };
    }
}
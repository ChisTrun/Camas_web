const word = require("../models/word_m.js");

module.exports = {
    environment: async (req,res,next) => {
        try {
            const data = await word.getAllVocab();
            res.render("learnPage",{title: 'environment',data: data});
        } catch (error) {
            next(error);
        };
    },
    cooking: async (req,res,next) => {
        try {
            const data = await word.getAllVocab();
            res.render("learnPage",{title: 'cooking',data: data});
        } catch (error) {
            next(error);
        };
    },
}
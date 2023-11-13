const word = require("../models/word_m.js");

module.exports = {
    environment: async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(1);
            res.render("learnPage",{title: 'environment',data: data});
        } catch (error) {
            next(error);
        };
    },
    cooking: async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(2);
            res.render("learnPage",{title: 'cooking',data: data});
        } catch (error) {
            next(error);
        };
    },
    hospital: async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(3);
            res.render("learnPage",{title: 'hospital',data: data});
        } catch (error) {
            next(error);
        };
    },
    army:  async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(4);
            res.render("learnPage",{title: 'army',data: data});
        } catch (error) {
            next(error);
        };
    },
}
const word = require("../models/word_m.js");
module.exports = {
    getAllVacab: async (req,res,next) => {
        try {
            const data = await word.getAllVocab();
            res.send(data);
        } catch (error) {
            next(error);
        };
        
    }
}
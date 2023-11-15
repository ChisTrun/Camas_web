const word = require("../models/word_m.js");

module.exports = {
    environment: async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(1);
            if(req.user) {
                res.render("learnPage",{title: 'environment',data: data,hasLogin: true,userName: req.user.username});
            } else {
                res.render("learnPage",{title: 'environment',data: data,hasLogin: false});
            }

        } catch (error) {
            next(error);
        };
    },
    cooking: async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(2);
            if(req.user) {
                res.render("learnPage",{title: 'cooking',data: data,hasLogin: true,userName: req.user.username});
            } else {
                res.render("learnPage",{title: 'cooking',data: data,hasLogin: false});
            }
        } catch (error) {
            next(error);
        };
    },
    hospital: async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(3);
            if(req.user) {
                res.render("learnPage",{title: 'hospital',data: data,hasLogin: true,userName: req.user.username});
            } else {
                res.render("learnPage",{title: 'hospital',data: data,hasLogin: false});
            }
        } catch (error) {
            next(error);
        };
    },
    army:  async (req,res,next) => {
        try {
            const data = await word.getRandOrderFromTopic(4);
            if(req.user) {
                res.render("learnPage",{title: 'army',data: data,hasLogin: true,userName: req.user.username});
            } else {
                res.render("learnPage",{title: 'army',data: data,hasLogin: false});
            }
        } catch (error) {
            next(error);
        };
    },
}
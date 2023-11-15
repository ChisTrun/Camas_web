const Topic = require('../models/topic_m')

module.exports = {
    index: async (req,res,next) => {
        try {
            const data = await Topic.getAllTopic();
            if(req.user) {
                res.render("index",{data: data, hasLogin: true,userName: req.user.username});
            } else {
                res.render("index",{data: data, hasLogin: false});
            }
        } catch (error) {
            next(error);
        };
    }
}
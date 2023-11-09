const Topic = require('../models/topic_m')

module.exports = {
    index: async (req,res,next) => {
        try {
            const data = await Topic.getAllTopic();
            res.render("index",{data: data});
        } catch (error) {
            next(error);
        };
    }
}
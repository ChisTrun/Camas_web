const db = require('../utils/db')
module.exports = class Topic {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.image = obj.image;
    }
    static async getAllTopic() {
        try {
            const result = await db.getAll('topic');
            return result.map(topic => {
                return new Topic(topic);
            });
        } catch (error) {
            throw error;
        };
        
    };
}
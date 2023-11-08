const db = require("../utils/db.js")

module.exports = class word {
  constructor(obj) {
    this.topic = obj.topic;
    this.word = obj.word;
    this.mean = obj.mean;
    this.pos = obj.pos;
  }
  static async getAllVocab() {
    try {
      const result = await db.getAll("vocab");
      return result.map(w => {
        return new word(w)
      });
    } catch (error) {
      throw error;
    };
    
  }
}


const db = require('../utils/db');

module.exports = class User {
    static async findUserById(id,callBack) {
        try {
            const row = await db.selectCondition(`id = ${id}`,'user')
            callBack(null,row);
        } catch (error) {
            callBack(error);
        }; 
    }
    static async addNewUser(profile,callBack) {
        try {
            const valueString  = `('${profile.id}','${profile.displayName}','${profile.provider}')`
            await db.insertInto(valueString,'user');
            callBack(null,profile);
        } catch (error) {
            callBack(error);
        };
        
        
    }
}
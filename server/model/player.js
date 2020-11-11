const getDb = require('../utility/database').getdb;

class Player {
    constructor(userName, finalPoint) {
        this.playerName = userName;
        this.finalPoint = finalPoint;
    }

    saveUser() {
        const db = getDb();
        return new Promise((resolve, reject) => {
            db.collection('users').insertOne(this, (err, res) => {
                if (!err) {
                    resolve(res);
                } else {
                    reject(err);
                }
            })
        })
    }

    static getTopPlayers() {
        const db = getDb();
        return new Promise((resolve, reject) => {
            db.collection('users').find({}, { projection: { _id: 0, playerName: 1, finalPoint: 1 } }).sort({ finalPoint: -1 }).limit(5).toArray((err, res) => {
                if (!err) {
                    resolve(res);
                } else {
                    reject(err);
                }
            })    
        })
    }
}

module.exports = Player;
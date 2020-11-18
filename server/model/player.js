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

    static getSorting() {
        const db = getDb();
        return new Promise((resolve, reject) => {
            // object
            db.collection('users').find({}, { projection: { _id: 1 } }).sort({ _id: -1 }).limit(1).toArray((err, res) => {
                if (!err) {
                    let lastInjectedId = res[0]['_id'];
                    db.collection('users').find().sort({ finalPoint: -1 }).toArray((error, result) => {
                        resolve({ lastInjectedId, result })
                    });
                } else {
                    reject(err);
                }
            });
        })
    }
}

module.exports = Player;
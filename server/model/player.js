const getDb = require('../utility/database').getdb;

class Player {
    constructor(userName, finalPoint) {
        this.userName = userName;
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
}

module.exports = Player;
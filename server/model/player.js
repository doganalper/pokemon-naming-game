const getDb = require('../utility/database').getdb;

class Player {
    constructor(userName, finalPoint) {
        this.userName = userName;
        this.finalPoint = finalPoint;
    }

    saveUser() {
        const db = getDb();

        db.collection('users')
            .insertOne(this)
                .then(result => {
                    console.log(result);
                }).catch((err) => {
                    console.log(err);
                });
    }
}

module.exports = Player;
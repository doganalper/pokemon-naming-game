const Player = require('../model/player');

exports.createPlayer = (req, res) => {
    const { playerName, finalPoint } = req.body;    
    const player = new Player(playerName, finalPoint);
    player.saveUser()
        .then((response) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        }).catch((err) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(err));
        })
}

exports.getRandomPokemon = (req, rest) => {
    
}
const Player = require('../model/player');

exports.createPlayer = (req, res) => {
    const { playerName, finalPoint } = req.body;    
    const player = new Player(playerName, finalPoint);
    player.saveUser()
}

exports.getRandomPokemon = (req, rest) => {
    
}
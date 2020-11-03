const Player = require('../model/player');
const axios = require('axios');
const pokemonFuncs = require('../utility/pokemonFuncs');

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

exports.pokemonGuessedRight = (req, res) => {
    let pokemonId = Number(req.params.id);
    pokemonFuncs.pickedPokemons.push(pokemonId);
    res.status(200).send({pokemon_id : pokemonId })
}

exports.getRandomPokemon = (req, res) => {
    let pokemonId = pokemonFuncs.getRandomId();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then((data) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data.data));
        }).catch((err) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(err));
        });
}

exports.clearPokemons = (req, res) => {
    pokemonFuncs.pickedPokemons = [];
    res.status(200).send({ picked_pokemons_length: pokemonFuncs.pickedPokemons.length });
}
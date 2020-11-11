const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./utility/database').mongoConnect;
const cors = require('cors');
const controllers = require('./controller/controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/create-player', controllers.createPlayer);
app.get('/get-random-pokemon', controllers.getRandomPokemon);
app.get('/correct-guess/:id', controllers.pokemonGuessedRight);
app.get('/clear-pokemons', controllers.clearPokemons);
app.get('/get-top-players', controllers.getTopPlayers)

mongoConnect(client => {
    app.listen(3000);
})
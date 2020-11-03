const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./utility/database').mongoConnect;
const cors = require('cors');
const controllers = require('./controller/player');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/create-player', controllers.createPlayer);
app.get('/get-pokemon', controllers.getRandomPokemon);

mongoConnect(client => {
    app.listen(3000);
})
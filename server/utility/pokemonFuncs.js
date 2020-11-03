const maxPokeCount = 893;
let pickedPokemons = [];

const getRandomBetween = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

const getRandomId = () => {
    let randomId = getRandomBetween(1, maxPokeCount);
    if (pickedPokemons.includes(randomId)) {
        getRandomId();
    } else {
        return randomId;
    }
}

exports.pickedPokemons = pickedPokemons;
exports.getRandomId = getRandomId;
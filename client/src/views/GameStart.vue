<template>
  <div v-if="pokemon">
      {{ $store.getters.playerName }}
      <img v-if="pokemon" :src="pokemon.sprites['front_default']" :alt="pokemon.name">
      <button @click="getRandomPokemon"> Pick new Pokemon! </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pokemon: null,
        }
    },
    methods: {
        getRandomPokemon() {
            this.$axios.get("/get-random-pokemon")
                .then((pokemon) => {
                    this.pokemon = pokemon.data;
                    console.log(pokemon.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.getRandomPokemon()
    }
}
</script>

<style>

</style>
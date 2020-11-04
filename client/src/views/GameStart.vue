<template>
  <div v-if="pokemon">
      <PokedexGuess :pokemon="pokemon" :is-loading="isLoading"/>
  </div>
</template>

<script>
import PokedexGuess from '@/components/PokedexGuess';
export default {
    data() {
        return {
            pokemon: null,
            isLoading: true,
        }
    },
    components: {
        PokedexGuess,
    },
    methods: {
        getRandomPokemon() {
            this.$axios.get("/get-random-pokemon")
                .then((pokemon) => {
                    this.pokemon = pokemon.data;
                    console.log(pokemon.data);
                }).catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }
    },
    mounted() {
        this.getRandomPokemon()
    }
}
</script>

<style>

</style>
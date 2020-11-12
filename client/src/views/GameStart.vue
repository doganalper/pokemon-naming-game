<template>
  <div class="GameStart">
      <PokedexGuess 
        :pokemon="pokemon" 
        :is-loading="isLoading"
        @newPokemon="getRandomPokemon"/>
      <PokedexInfo 
        :pokemon="pokemon"
        v-if="$store.getters.openDetail" 
        />
  </div>
</template>

<script>
import PokedexGuess from '@/components/PokedexGuess';
import PokedexInfo from '@/components/PokedexInfo';
export default {
    data() {
        return {
            pokemon: null,
            isLoading: true,
        }
    },
    components: {
        PokedexGuess,
        PokedexInfo
    },
    methods: {
        getRandomPokemon() {
            this.$axios.get("/get-random-pokemon")
                .then((pokemon) => {
                    this.pokemon = pokemon.data;
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
    },
}
</script>

<style scoped>
    .GameStart {
        display:flex;
        flex-direction: row;
    }
</style>
<template>
  <div class="scoreBoard">
      <TopScores :scores="topScores.scores" v-if="!topScores.isLoading"/>
      <!-- Change below one. -->
      <TopScores :scores="playerSorting.scores" v-if="!playerSorting.isLoading"/>
      <PokedexGuess :pokemon="pokemon.pickedPokemon" :is-loading="pokemon.isLoading" :is-suggestion="true"/>
  </div>
</template>

<script>
import TopScores from '@/components/TopScores';
import PokedexGuess from '../components/PokedexGuess.vue';
export default {
  components: {
    TopScores,
    PokedexGuess
  },
  data() {
    return {
      topScores: {
        scores: null,
        isLoading: true
      },
      playerSorting: {
        scores: null,
        isLoading: true
      },
      pokemon: {
        pickedPokemon: null,
        isLoading: true,
      }
    }
  },
  methods: {
    getTopPlayers() {
      this.$axios.get('/get-top-players')
        .then((result) => {
          this.topScores.scores = result.data;
        }).finally(() => {
          this.topScores.isLoading = false;
        });
    },
    getPlayerSorting() {
      this.$axios.get('/my-sorting')
        .then(result => {
          this.playerSorting.scores = result.data;
        }).finally(()=> {
          this.playerSorting.isLoading = false
        })
    },
    getRandomPokemon() {
      this.$axios.get("/get-random-pokemon")
          .then((pokemon) => {
            this.pokemon.pickedPokemon = pokemon.data;
          }).catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.pokemon.isLoading = false;
          })
    }
  },
  mounted() {
    this.getTopPlayers();
    if(this.$route.params.isFromMainPage) {
      this.getPlayerSorting();
    } else {
      this.getRandomPokemon();
    }
  }
}
</script>

<style scoped>
  .scoreBoard {
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
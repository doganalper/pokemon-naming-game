<template>
  <div class="scoreBoard">
      <TopScores :scores="topScores.scores" v-if="!topScores.isLoading"/>
      <!-- Change below one. -->
      <TopScores :scores="topScores.scores" v-if="!topScores.isLoading"/>
  </div>
</template>

<script>
import TopScores from '@/components/TopScores';
export default {
  components: {
    TopScores,
  },
  data() {
    return {
      topScores: {
        scores: null,
        isLoading: true
      }
    }
  },
  mounted() {
    this.$axios.get('/get-top-players')
      .then((result) => {
        this.topScores.scores = result.data;
      }).finally(() => {
        this.topScores.isLoading = false;
      });
  }
}
</script>

<style scoped>
  .scoreBoard {
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
  }
</style>
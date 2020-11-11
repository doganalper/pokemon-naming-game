<template>
  <div class="gameMain">
    <div class="playerInfoSect" v-if="isCleared">
      <span v-if="$store.getters.isFailed"> You have failed, please try again! </span>
      <input
        type="text"
        v-model="userName"
        class="inputName"
        placeholder="Your name"
      />
      <button class="startGameBtn" @click="startGame">Start Game!</button>
      <span v-show="error">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      error: false,
      errorMessage: "Please tell us your name!",
      isCleared: false,
    };
  },
  methods: {
    startGame() {
      this.error = false;
      if (this.userName !== "" && this.userName !== null) {
        this.$store.commit("START_GAME", this.userName);
        this.$router.push('/game');
      } else {
        this.error = true;
      }
    },
    clearPickedPokemons() {
      this.$axios.get("/clear-pokemons")
        .then(() => {
          this.isCleared = true;
        })
    }
  },
  mounted() {
    this.clearPickedPokemons();
  }
};
</script>

<style scoped>
  .gameMain{
    width: 600px;
  }

  .playerInfoSect{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputName{
    background-color: #e9c837;
    border-radius: 15px;
    width: 300px;
    border: 1px solid black;
    padding: 10px;
    margin: 15px 0;
  }
  .inputName:focus{
    outline: none;
  }

  .startGameBtn{
    height: 50px;
    border-radius: 15px;
    width: 210px;
    margin-bottom: 10px;
    background-color: red;
    border: none;
    color: #fff;
    font-size: 17px;
  }
  .startGameBtn:focus{
    outline: none;
  }
</style>

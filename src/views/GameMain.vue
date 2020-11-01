<template>
  <div class="gameMain">
    <div class="playerInfoSect">
      <input type="text" v-model="userName" class="inputName" placeholder="Your name">
      <button class="startGameBtn" @click="startGame"> Start Game! </button>
      <span v-if="$store.getters.isGameStarted">
        {{ $store.getters.playerName }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
    }
  },
  methods: {
    startGame() {
      if(this.userName !== '' || this.userName !== null) {
        this.$store.commit('START_GAME', this.userName) 
      } else {
        alert('Please enter your name!')
      }
    }
  }
}
</script>

<style scoped>
  .gameMain{
    width: 600px;
  }

  .playerInfoSect{
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .inputName{
    background-color: #e9c837;
    border-radius: 15px;
    width: 300px;
    border:1px solid black;
    padding: 10px;
    margin-bottom: 15px;
  }
  .inputName:focus{
    outline: none;
  }

  .startGameBtn{
    height: 50px;
    border-radius: 15px;
    width: 210px;
    background-color: red;
    border: none;
    color: #fff;
    font-size: 17px;
  }
  .startGameBtn:focus{
    outline: none;
  }
</style>
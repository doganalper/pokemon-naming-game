<template>
  <div class="app">
    <GameStart v-if="$store.getters.isGameStarted" />
    <GameMain v-else />
  </div>
</template>

<script>
import GameStart from './views/GameStart';
import GameMain from './views/GameMain';
export default {
    components: {
        GameStart,
        GameMain,
    }
}
</script>

<style>
@font-face {
  font-family: "Pokemon";
  src: local("Pokemon"), url(../public/fonts/Pokemon-Classic.ttf) format("truetype");
}

*{
  font-family: "Pokemon";
}

.app{
  width: 100%;
  height: 948px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../public/background-pics/bg4.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
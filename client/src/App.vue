<template>
  <div class="mainScreen">
    <Header />
    <div class="app">
      <GameStart v-if="$store.getters.isGameStarted" />
      <GameMain v-else />
    </div>
  </div>
</template>

<script>
import GameStart from '@/views/GameStart';
import GameMain from '@/views/GameMain';
import Header from '@/components/Header';
export default {
    components: {
        GameStart,
        GameMain,
        Header
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

.mainScreen {
  background-image: url('../public/background-pics/bg4.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  overflow: hidden;
}

.app{
  width: 100%;
  height: 922px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
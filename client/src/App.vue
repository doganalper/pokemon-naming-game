<template>
  <div class="mainScreen">
    <Header />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
    components: {
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
  background-image: url('../public/background-pics/bg2.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.app{
  overflow: hidden;
  width: 100%;
  height: 891px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
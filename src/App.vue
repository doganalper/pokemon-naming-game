<template>
  <div id="app" 
    :style="{ 
        backgroundImage: 'url(' + setImage + ')', 
        backgroundRepeat: 'no-repeat', 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center'}"
  >
    <GameMain />
  </div>
</template>

<script>
import GameMain from '@/views/GameMain';
export default {
  data() {
    return {
      bgBaseUrl: '../background-pics/',
      bgImages: [
        'bg1.jpg',
        'bg2.jpg',
        'bg3.jpg',
        'bg4.jpg',
      ],
      setImage: null,
    }
  },
  components: {
    GameMain,
  },
  methods: {
    setBgImage() {
      this.setImage = this.bgBaseUrl + this.bgImages[Math.floor(Math.random() * this.bgImages.length)];
      console.log(this.setImage);
    }
  },
  mounted() {
    this.setBgImage();
  }
}
</script>

<style>
@font-face {
  font-family: "Pokemon";
  src: local("Pokemon"), url(../public/fonts/Pokemon-Classic.ttf) format("truetype");
}

#app{
  font-family: "Pokemon";
  width: 100%;
  height: 948px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

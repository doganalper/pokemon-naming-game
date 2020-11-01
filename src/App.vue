<template>
  <div id="app" 
    :style="{ 
        backgroundImage: 'url(' + setImage + ')', 
        backgroundRepeat: 'no-repeat', 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center'}"
  >
    <router-view />
  </div>
</template>

<script>
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
  methods: {
    setBgImage() {
      this.setImage = this.bgBaseUrl + this.bgImages[Math.floor(Math.random() * this.bgImages.length)];
    }
  },
  mounted() {
    this.setBgImage();
    this.$store.commit('CLEAR_GAME');
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

#app{
  width: 100%;
  height: 948px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

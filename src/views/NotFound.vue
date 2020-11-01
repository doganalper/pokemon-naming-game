<template>
  <div class="notFoundPage">
    <span class="errorMessage">404 Not Found</span>
    <router-link tag="a" to="/" class="toMainScreen">
      To Main Screen
    </router-link>
  </div>
</template>

<style scoped>
.notFoundPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.errorMessage {
  font-size: 40px;
  margin-bottom: 10px;
}
.toMainScreen {
  font-size: 21px;
  text-decoration: none;
  color: limegreen;
}
</style>

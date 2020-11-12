<template>
  <div class="headerPart">
      <div class="playerInfo">
          <span v-if="$store.getters.playerName">
            <span class="infoItem"> Player: {{ $store.getters.playerName }} </span>
            <span class="infoItem"> Point: {{  $store.getters.point }} </span>
            <span> Fails: {{ $store.getters.failsCount }}/3 </span>
          </span>
      </div>
    <div class="buttonPart">
        <router-link tag="button" to="/score-board" v-if="$route.path === '/'">
            Score Board
        </router-link>
        <router-link tag="button" to="/" v-if="$route.path === '/score-board'">
            Main Page
        </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .headerPart {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
    }

    .playerInfo {
        width: 60%;
    }

    .buttonPart {
        width: 40%;
        display: flex;
        justify-content: flex-end;
    }

    .infoItem {
        margin-right: 20px;
    }
</style>
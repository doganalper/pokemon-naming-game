<template>
  <div class="headerPart">
      <div v-if="$store.getters.playerName" class="playerInfo">
          <span class="infoItem"> Player: {{ $store.getters.playerName }} </span>
          <span class="infoItem"> Point: {{  $store.getters.point }} </span>
          <span> Fails: {{ $store.getters.failsCount }}/3 </span>
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
        width: 40%;
    }

    .infoItem {
        margin-right: 20px;
    }
</style>
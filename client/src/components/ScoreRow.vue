<template>
  <div class="scoreContainer">
      <div>
          <span> {{ index }} </span>
          <span> {{ score.playerName }} </span>
      </div>
      <span>
          {{ score.finalPoint }}
      </span>
  </div>
</template>

<script>
export default {
    props: {
        score: {
            type: Object,
            default : () => {}
        },
        index: {
            type: Number,
            default: null,
        }
    }
}
</script>

<style scoped>
    .scoreContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #C8C8C8;
        border-radius: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
    }
</style>
<template>
  <div class="scoreContainer" :class="cravings">
      <div>
          <span> {{ score.index ? score.index : index }} </span>
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
    },
    computed: {
        cravings: function() {
            return this.score.isPlayer ? 'isPlayer' : 'notPlayer';
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
        border-radius: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
    }
    .notPlayer {
        background-color: #C8C8C8;
    }
    .isPlayer {
        background-color: #1adec0;
    }
</style>
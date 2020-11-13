<template>
    <div class="topScores">
        <span class="topPlayersText">Top Players</span>
        <div class="scoresContainer topScores">
            <ScoreRow v-for="(score, index) in scores" :key="`score--${index+1}`" :index="index+1" :score="score" />
        </div>
    </div>
</template>

<script>
import ScoreRow from '@/components/ScoreRow'
export default {
    props: {
        scores: {
            type: Array,
            default : () => []
        },
    },
    components: {
        ScoreRow,
    }
}
</script>

<style scoped>
    .topScores {
        display: flex;
        flex-direction: column;
    }
    .scoresContainer {
        margin-top: 5px;
        width: 333px;
        height: 416px;
        background-color: #D60A2C;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-around;
    }
    .topPlayersText {
        font-size: 20px;
    }
</style>
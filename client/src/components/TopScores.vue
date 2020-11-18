<template>
    <div class="topScores" v-if="!scores.result">
        <span class="topPlayersText">Top Players</span>
        <div class="scoresContainer topScores">
            <ScoreRow v-for="(score, index) in scores" :key="`score--${index+1}`" :index="index+1" :score="score" />
        </div>
    </div>
    <div class="topScored" v-else>
        <span class="topPlayersText">My Place</span>
        <div class="scoresContainer topScores">
            <ScoreRow v-for="(score, index) in playerSortingList" :key="`score--${index+1}`" :index="index+1" :score="score" />
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
    data() {
        return {
            playerSortingList: [],
        }
    },
    components: {
        ScoreRow,
    },
    methods: {
        setScoresDisplay() {
            let playersId = this.scores.lastInjectedId;
            let scores = this.scores.result;
            let index = scores.findIndex(score => score['_id'] == playersId)
            if(index + 1 === 1) {
                this.playerSortingList.push({...scores[index], index: index+1, isPlayer:true})
                this.playerSortingList.push({...scores[index+1], index: index+2})
                this.playerSortingList.push({...scores[index+2], index: index+3})
                this.playerSortingList.push({...scores[index+3], index: index+4})
                this.playerSortingList.push({...scores[index+4], index: index+5})
            } else if (index + 1 === 2) {
                this.playerSortingList.push({...scores[index-1], index: index})
                this.playerSortingList.push({...scores[index], isPlayer:true, index:index+1})
                this.playerSortingList.push({...scores[index+1], index: index+2})
                this.playerSortingList.push({...scores[index+2], index: index+3})
                this.playerSortingList.push({...scores[index+3], index: index+4})
            } else if (index + 1 === scores.length) {
                this.playerSortingList.push({...scores[index-4], index: index-3})
                this.playerSortingList.push({...scores[index-3], index: index-2})
                this.playerSortingList.push({...scores[index-2], index: index-1})
                this.playerSortingList.push({...scores[index-1], index: index})
                this.playerSortingList.push({...scores[index], isPlayer:true, index:index+1})
            } else if (index + 1 === scores.length - 1) {
                this.playerSortingList.push({...scores[index-3], index: index-2})
                this.playerSortingList.push({...scores[index-2], index: index-1})
                this.playerSortingList.push({...scores[index-1], index: index})
                this.playerSortingList.push({...scores[index], isPlayer:true, index:index+1})
                this.playerSortingList.push({...scores[index+1], index: index+2})
            } else {
                this.playerSortingList.push({...scores[index-2], index: index-1})
                this.playerSortingList.push({...scores[index-1], index: index})
                this.playerSortingList.push({...scores[index], isPlayer:true, index:index+1})
                this.playerSortingList.push({...scores[index+1], index: index+2})
                this.playerSortingList.push({...scores[index+2], index: index+3})
            }
        }
    },
    mounted() {
        if(this.scores.result) {
            this.setScoresDisplay();
        }
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
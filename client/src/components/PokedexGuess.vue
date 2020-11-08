<template>
  <div 
    class="pokedexBg display-row-center" 
    :style="$store.getters.openDetail ? {borderTopRightRadius: '0px', borderBottomRightRadius: '0px'} : {}"
    >
      <div class="topPart display-row-center">
          <div class="picturePart display-row-center">
              <img :src="pokemonPhoto" v-if="!isLoading">
              <span v-if="isLoading" :style="isLoading ? {display: inline} : {display:none}">
                  Pokemon is loading...
              </span>
          </div>
          <div class="screenButtonsPart">
              <div class="redDot"></div>
              <div class="rowsContainer">
                <div v-for="row in 3" :key="row" class="rows" />
              </div>
          </div>
      </div>
      <div class="downPart display-row-center">
          <input type="text" v-model="guessedName" class="guessInput">
          <div class="downButtons">
              <button class="guessButton" @click="activityBtnClicked">
                {{ guessedRight ? 'Catch New Pokemon!' : 'Guess!' }}
              </button>
              <button class="detailButton" :style= "[!guessedRight ? {'backgroundColor':'#ACACAC'} : {'backgroundColor':'#EB793D'}]" @click="openDetail"> > </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            default(){
                return {}
            }
        },
        isLoading: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            pokemonPhoto: null,
            isFront: false,
            guessedName: null,
            guessedRight: false,
        }
    },
    methods: {
        startInterval() {
            setInterval(()=> {
                this.isFront = !this.isFront;
            },1500)
        },
        activityBtnClicked() {
            if(this.guessedRight) {
                this.pickNextPokemon();
            } else {
                this.guess();
            }
        },
        guess() {
            console.log("Guess Clicked");
            if(this.guessedName === this.pokemon.name.replace(/^\w/, (c) => c.toUpperCase()) || this.guessedName === this.pokemon.name) {
                this.guessedRight = true;
                this.$store.commit('UPDATE_PLAYER_POINT', 100);
            } else {
                if( this.$store.getters.failsCount < 2 ) {
                    this.$store.commit('INCREASE_FAILS');
                } else {
                    this.sendUserInfo();
                    this.$store.commit('SET_FAILED');
                    this.$store.commit('CLEAR_GAME');
                }
            }
        },
        sendUserInfo() {
            let payload = {'playerName': this.$store.getters.playerName,'finalPoint': this.$store.getters.point}
            let headers = {
                headers: {
                'Content-Type': 'application/json',
                }
            }
            this.$axios.post('http://localhost:3000/create-player', payload, headers)
                .then(data => {
                console.log(data);
                }).catch(err => {
                console.log(err);
                });
        },
        pickNextPokemon() {
            this.$emit('newPokemon');
            this.guessedRight = false;
            this.$store.commit('SET_OPEN_DETAIL','Close');
        },
        openDetail() {
            this.$store.commit('SET_OPEN_DETAIL','Open');
        }
    },
    watch: {
        isFront(val) {
            if(val) {
                this.pokemonPhoto = this.pokemon.sprites['front_default'];
            } else {
                this.pokemonPhoto = this.pokemon.sprites['back_default'];
            }
        }
    },
    mounted () {
        this.startInterval();
    }
}
</script>

<style scoped>
    * {
        border-radius: 15px;
    }
    .display-row-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pokedexBg {
        background-color: #D60A2C;
        width: 333px;
        height: 416px;
        padding: 5px;
    }

    .topPart {
        margin-top: 15px;
        width: 305px;
        height: 263px;
        background-color: #ACACAC;
        margin-bottom: 20px;
    }

    .picturePart {
        margin-top: 15px;
        width: 278px;
        height: 217px;
        background-color: #F7F5F8;
        justify-content: center;
    }

    .screenButtonsPart {
        display: flex;
        flex-direction: row;
        margin: 5px 0;
        width: 90%;
        align-items: center;
        justify-content: space-between;
    }

    .redDot{
        width: 23px;
        height: 23px;
        background-color: #DB0505;
    }

    .rowsContainer {
        display: flex;
        flex-direction: column;
    }

    .rows{
        width: 60px;
        margin-bottom: 3px;
        height: 3px;
        background-color: black;
    }

    .guessInput {
        background-color: #F7F5F8;
        width: 278px;
        height: 49px;
        padding: 10px;
        box-sizing: border-box;
        border: none;
        margin-bottom: 15px;
    }

    .downButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button {
        height: 48px;
        border: 1px solid black;
    }

    .guessButton {
        background-color: #EB793D;
        width: 214px;
    }

    .detailButton {
        width: 79px;
        margin-left: 15px;
    }
</style>
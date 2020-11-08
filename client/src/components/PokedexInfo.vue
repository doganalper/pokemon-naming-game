<template>
  <div class="pokedexBg display-row-center">
      <div class="nameTag">
          {{ pokemon.name.toUpperCase() }}
      </div>
      <div class="pokeInfo">
          <div class="stats">
            <div 
                class="stat" 
                v-for="(stat,index) in pokemon.stats" 
                :key="index"
            >
                <span>{{ stat.stat.name | trimSpecial }}</span>
                <span class="baseStat">{{ stat.base_stat }}</span>
            </div>
          </div>
          <div class="types">
              <div 
                class="type" 
                :style="{backgroundColor: typeColors[type.type.name]}"
                v-for="(type,index) in pokemon.types" 
                :key="index"
             >
                  {{ type.type.name }}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            typeColors: {
                'normal': '#aa9',
                'fire': '#f42',
                'water': '#39f',
                'electric': '#fc3',
                'grass': '#7c5',
                'ice': '#6cf',
                'fighting': '#b54',
                'poison': '#a59',
                'ground': '#db5',
                'flying': '#89f',
                'psychic': '#f59',
                'bug': '#ab2',
                'rock': '#ba6',
                'ghost': '#66b',
                'dragon': '#76e',
                'dark': '#754',
                'steel': '#aab',
                'fairy': '#e9e'
            }
        }
    },
    props: {
        pokemon: {
            type: Object,
            default() {
                return {};
            },
        }
    },
    filters: {
        trimSpecial(stat) {
            if(stat.includes('special')) {
                let splittedString = stat.split('-');
                let newString = `s-${splittedString[1]}`
                return newString;
            }
            return stat;
        }
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
        width: 400px;
        height: 416px;
        padding: 5px;
        padding-left: 10px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .nameTag {
        width: 340px;
        height: 46px;
        background-color: #C8C8C8;
        margin: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .pokeInfo {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
    }
    .stats {
        padding: 5px;
        box-sizing: border-box;
        height: 313px;
        width: 60%;
        background-color: #C8C8C8;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .stat {
        background-color: #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 5px;
    }
    .baseStat {
        font-size: 14px;
    }
    .types {
        height: 313px;
        width: 35%;
        background-color: #C8C8C8;
        box-sizing: border-box;
        padding: 5px;
    }
    .type {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 5px;
    }
</style>
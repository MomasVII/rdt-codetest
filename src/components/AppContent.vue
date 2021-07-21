<template>
  <div class="appContentContainer">
    <div v-for="game in gameData" v-bind:key=game.id>
      <div class="gameCards">
        <game-card :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
//Show Game Card Component
import gameCard from './GameCard.vue'

import axios from 'axios'

export default {
  name: 'Get Data',
  components: {
      gameCard,
    },
  data() {
    return {
      gameData: null, //Game response data
    }
  },
  mounted () {
    //Get Game info from API
    axios
      .get('https://api.mod.io/v1/games?api_key=ebd85260642da002143e48b64be9bf42')
      .then(response => (this.gameData = response.data.data))
  }
}


/*
import axios from 'axios'
const getGames = async () => {
  axios.get('https://api.mod.io/v1/games?api_key=ebd85260642da002143e48b64be9bf42')
    .then(response => {
      console.log(response.data.data)
      return response.data.data
    })
}*/

</script>

<style scoped>
.gameCards {
  margin-left:60px;
}
</style>

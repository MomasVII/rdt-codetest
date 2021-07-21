<template>
  <div class="appContentContainer">
    <div class="gameHeader">
      <h1>Games</h1>
      <login-button />
    </div>
    <hr />
    <div class="cardsContainer">
      <div v-for="game in gameData" v-bind:key=game.id class="gameCards">
        <game-card :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
//Show Game Card Component
import gameCard from './GameCard.vue'
import loginButton from './LoginButton.vue'

import axios from 'axios'

export default {
  name: 'Get Data',
  components: {
      gameCard,
      loginButton
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
      .then(response => {
        console.log(response.data.data);
        this.gameData = response.data.data
      })
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
.appContentContainer {
  margin-left:300px;
  overflow: hidden;
  padding:24px;
}
.gameHeader {
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.cardsContainer {
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
}
.gameCards {
  padding: 0.75rem;
  box-sizing: border-box;
  width:16.6666%;
}
h1 {
  font-size:21px;
  margin:0 0 6px 0;
}
hr {
  border: 2px solid #44bfd5;
}


@media screen and (max-width: 2359px) {
  .gameCards {
    width:16.6666%;
  }
}

@media screen and (max-width: 2019px) {
  .gameCards {
    width:20%;
  }
}

@media screen and (max-width: 1339px) {
  .gameCards {
      width: 33.3333%;
  }
}

@media screen and (max-width: 1023px) {
  .gameCards {
      width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .appContentContainer {
    margin-left: 60px;
  }
  .gameCards {
      width: 33.3333%;
  }
}

@media screen and (max-width: 639px) {
  .gameCards {
      width: 50%;
  }
}

@media screen and (max-width: 479px) {
  .appContentContainer {
      margin-left: 0;
  }
}

@media screen and (max-width: 419px) {
  .gameCards {
      width: 100%;
  }
}
</style>

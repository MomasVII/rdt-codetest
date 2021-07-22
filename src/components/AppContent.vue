<template>
  <div class="appContentContainer">
    <div class="gameHeader">
      <div class="headers">
        <h1 v-bind:class="{ activeHeader: showGames }" @click="showGames = true">Games</h1>
        <h1 v-bind:class="{ activeHeader: !showGames }" @click="showGames = false" v-if="accessToken != ''">My Games</h1>
      </div>
      <login-button @sendAccessToken="getAccessToken" v-if="accessToken == ''" />
      <div class="logoutButton" @click="logout"  v-if="accessToken != ''">
        LOGOUT
      </div>
    </div>
    <hr />
    <transition name="fade">
      <div class="cardsContainer" v-if="showGames">
        <div v-for="game in gameData" v-bind:key=game.id class="gameCards">
          <game-card :game="game" />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="cardsContainer" v-if="!showGames">
        <div v-for="game in myGameData" v-bind:key=game.id class="gameCards">
          <game-card :game="game" />
        </div>
      </div>
    </transition>
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
      myGameData: null, //Game response data
      accessToken: "",
      showGames: true //Show games or show my games
    }
  },
  mounted () {

    //Check if we have a session
    if(localStorage.accessToken) this.accessToken = localStorage.accessToken;

    //Get Game info from API
    axios
      .get('https://api.mod.io/v1/games?api_key=ebd85260642da002143e48b64be9bf42')
      .then(response => {
        console.log(response.data.data);
        this.gameData = response.data.data
      })
  },
  watch:{
    accessToken(newAT) {
      console.log("found access token ", newAT);
      this.getAccessToken(newAT) //If we have an accessToken get users games
      localStorage.accessToken = newAT;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('accessToken');
      this.accessToken = "";
    },
    getAccessToken (value) {
      console.log("access Token: ", value);
      this.accessToken = value;

      //Get this users games
      const headers = {
        'Authorization': 'Bearer '+value,
        'Accept': ' application/json'
      }
      axios
      .get('https://api.mod.io/v1/games', {
        headers: headers
      }).then(response => {
        console.log(response);
        this.myGameData = response.data.data;
      })
    }
  }
}

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
.headers {
  display:flex;
  align-items:center;
}
.headers h1 {
  margin-right:20px;
  cursor:pointer;
  opacity:0.5;
}
.headers .activeHeader {
  opacity:1;
}
.cardsContainer {
  display:flex;
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

.logoutButton {
  font-size:12px;
  color:red;
  cursor:pointer;
  &:hover {
    text-decoration:underline;
  }
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

@media screen and (max-width: 1679px) {
  .gameCards {
      width: 25%;
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

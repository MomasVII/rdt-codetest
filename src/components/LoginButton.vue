<template>
  <div class="loginButton" @click="show_login = !show_login">
    LOGIN
  </div>
  <transition name="fade" v-on:enter="enter" >
      <div class="loginContainer" v-if="show_login">
        <div class="loginArea">
          <h2>Login</h2>
          <hr />
          <form>
            <label>
              <h3>Email*</h3>
              <input type="text" />
            </label>
            <label>
              <h3>Password*</h3>
              <input type="text" />
            </label>
          </form>
        </div>
      </div>
  </transition>
</template>

<script>
//Show Game Card Component
import gameCard from './GameCard.vue'

export default {
  name: 'Login Button',
  components: {
      gameCard,
    },
  data() {
    return {
      show_login: false, //Game response data
    }
  },
  mounted () {
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
  .loginButton {
    background-color: #44bfd5;
    border-color: transparent;
    color: #fff;
    text-align: center;
    padding-bottom: calc(0.5em - 2px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 2px);
    text-align: center;
    border-radius: 4px;
    cursor:pointer;
  }

  .loginContainer {
    background-color:rgba(0,0,0,0.4);
    position: fixed;
    top:0px;
    left:0px;
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .loginArea {
    background-color:white;
    width:50%;
    border-radius: 6px;
    border-top: 3px solid #44bfd5;
    padding: 20px;
  }
  .loginArea h2 {
    color:#4a4a4a;
  }
  label h3 {
    color:#4a4a4a;
    margin-bottom:10px;
    font-size:14px;
  }
  input {
    width:100%;
    background-color: white;
    border-radius: 4px;
    color: #363636;
    border:1px solid #dbdbdb;
    height:35px;
    padding-left:10px;
  }

</style>

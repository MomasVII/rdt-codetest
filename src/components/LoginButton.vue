<template>
  <div class="loginButton" @click="show_login = true">
    LOGIN
  </div>
  <transition name="fade" v-on:enter="enter" >
      <div class="loginContainer" v-if="show_login">
        <div class="loginArea">
        <div class="close" @click="show_login = false">X</div>
          <h2>Login</h2>
          <hr />
          <form>
            <label>
              <h3>Email*</h3>
              <input type="text" v-model="email" />
            </label>
            <label>
              <h3>Password*</h3>
              <input type="text" />
            </label>
            <div class="formLogin">
              <div class="loginButton" @click="loginUser">
                LOGIN
              </div>
            </div>
          </form>
        </div>
      </div>
  </transition>
</template>

<script>
//Show Game Card Component
import gameCard from './GameCard.vue'
import axios from 'axios'

export default {
  name: 'Login Button',
  components: {
      gameCard,
    },
  data() {
    return {
      show_login: false, //Game response data
      email: "",
    }
  },
  methods: {
    loginUser() {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
      console.log(this.email)
      const data = {
        api_key: "ebd85260642da002143e48b64be9bf42",
        email: "tombye_07@hotmail.com"
      }
      axios
      .post('https://api.mod.io/v1/oauth/emailrequest', data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  

      /*$.ajax({
        url: 'https://api.mod.io/v1/authenticate/terms',
        method: 'get',
        data: '?api_key=ebd85260642da002143e48b64be9bf42&email='+this.email,
        headers: headers,
        success: function(data) {
          console.log(JSON.stringify(data));
        }
      })*/
    },
  },
}
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
    max-width:80px;
  }
  .formLogin {
    margin-top:20px;
  }

  .loginContainer {
    z-index: 50;
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
    position:relative;
  }
  .close {
    color:black;
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
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

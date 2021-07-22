<template>
  <div class="loginButton" @click="showLogin = true">
    LOGIN
  </div>
  <transition name="fade" v-on:enter="enter" >
      <div class="loginContainer" v-if="showLogin">
        <div class="loginArea">
        <div class="close" @click="showLogin = false">X</div>
          <h2>Login</h2>
          <hr />
          <form>
            <label v-show="!showSecurityCode">
              <h3>Email*</h3>
              <input type="text" v-model="email" />
            </label>
            <label v-show="showSecurityCode">
              <h3>Enter Security Code*</h3>
              <input type="text" v-model="mySecurityCode" />
            </label>
            <div class="formLogin" v-show="!showSecurityCode">
              <div class="loginButton" @click="loginUser">
                LOGIN
              </div>
            </div>
            <div class="formLogin" v-show="showSecurityCode">
              <div class="loginButton" @click="confirmSecurity">
                CONFIRM
              </div>
            </div>
            <div class="loginMessage" v-show="showMessage">
              {{ loginMessage }}
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
      showLogin: false, //Game response data
      loginMessage: "",
      showMessage: false,
      email: "tombye_07@hotmail.com",
      showSecurityCode: false, //Show or hide the security code form
      mySecurityCode: "", //Security code entered by user
      accessToken: "" //User access token
    }
  },
  methods: {
    loginUser() {
      
      this.showMessage = false; //Hide errors

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      const data = "api_key=ebd85260642da002143e48b64be9bf42&email="+this.email;
      
      axios
      .post('https://api.mod.io/v1/oauth/emailrequest', data, {
        headers: headers
      })
      .then(response => {
        //console.log(response);
        this.showMessage = true;
        this.loginMessage = response.data.message;
      })
      .catch((error) => {
        console.log(error);
      })

      this.showSecurityCode = true;
    },
    confirmSecurity() {
      console.log("Confirm security code");

      //Request access token from security code
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      const data = "api_key=ebd85260642da002143e48b64be9bf42&security_code="+this.mySecurityCode;
      axios
      .post('https://api.mod.io/v1/oauth/emailexchange', data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        if(response.data.code == 200) {
          //this.accessToken = response.data.access_token;
          //pass access token to appcontent
          console.log("Emit access token to parent");
          this.$emit('sendAccessToken', response.data.access_token)
        }
      })
      .catch((error) => {
        console.log(error);
      }) 
      this.showLogin = false;
    }
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

  .loginMessage {
    color:red;
    margin-top:15px;
    font-size:12px;
  }

</style>

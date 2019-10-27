<template>
  <div>
    <div class="nav">
      <router-link
        class="linkButton"
        v-if="!user.login"
        :to="{name:'RegistrationPage'}"
      >Registration</router-link>
      <router-link
        class="linkButton"
        v-if="!user.login"
        :to="{name:'AuthorizationPage'}"
      >Authorization</router-link>
      <span v-if="user.login">Hello, {{user.login}}!</span>
      <button class="linkButton" v-if="user.login" @click="logout">Log out</button>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService.js";
import cookies from "@/scripts/cookies.js";
export default {
  data() {
    return {
      user: {
        login: null,
        isAdmin: null
      }
    };
  },
  beforeUpdate() {
    this.userVer();
  },
  beforeMount() {
    this.userVer();
  },
  methods: {
    async userVer() {
      if (cookies.getItem("userSession")) {
        var response = await UsersService.getUser({
          id: cookies.getItem("userSession")
        });
        this.user.login = response.data.login;
        this.user.isAdmin = response.data.isAdmin;
      }
    },
    logout() {
      cookies.removeItem("userSession");
      this.user.login=null;
      this.user.isAdmin=null;
      this.$router.push({ name: "MainPage" });
    }
  }
};
</script>

<style>
.mainPage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-image: url("./images/1.jpg");
  background-position: center;
  background-size: cover;
}
#getStarted {
  background-color: transparent;
  border: 0;
  font-size: 50px;
  font-weight: bold;
}
</style>
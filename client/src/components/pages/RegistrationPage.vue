<template>
  <div id="registrationContent">
    <div>
      <h2>Registration</h2>
      <input class="mainInputs" v-model="user.login" type="text" placeholder="Login" />
      <input class="mainInputs" v-model="user.password" type="password" placeholder="Password" />
      <label>
        <input type="checkbox" v-model="user.isAdmin" />Admin?
      </label>
      <button class="linkButton" @click="addUser">Create account</button>
      <router-link
        id="link"
        class="linkButton"
        :to="{name:'AuthorizationPage'}"
      >Already have account?</router-link>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService.js";
import cookies from "@/scripts/cookies.js";
export default {
  data() {
    return {
      user: {
        login: "",
        password: "",
        isAdmin: false
      }
    };
  },
  methods: {
    async addUser() {
      if (this.user.login !== "" && this.user.password !== "") {
        await UsersService.addUser({
          login: this.user.login,
          password: this.user.password,
          isAdmin: this.user.isAdmin
        });
        this.$router.push({ name: "AuthorizationPage" });
      } else {
        alert("Empty fields!");
      }
    }
  },
  beforeMount() {
    if (cookies.getItem("userSession")) {
      this.$router.push({ name: "Products" });
    }
  }
};
</script>

<style>
#registrationContent {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("./images/1.jpg");
  background-position: center;
  background-size: cover;
}
#registrationContent div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
}
#link {
  border: 0;
  background-color: transparent;
  font-style: italic;
  color: steelblue;
  font-size: 15px;
}
</style>
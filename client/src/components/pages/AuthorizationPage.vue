<template>
  <div id="registrationContent">
    <div>
      <h2>Authorization</h2>
      <input class="mainInputs" v-model="user.login" type="text" placeholder="Login" />
      <input class="mainInputs" v-model="user.password" type="password" placeholder="Password" />
      <button class="linkButton" @click="authorization">Log in</button>
      <router-link id="link" class="linkButton" :to="{name:'RegistrationPage'}">Don't have account?</router-link>
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
        password: ""
      },
      users: []
    };
  },
  methods: {
    async getUsers(){
      var response = await UsersService.fetchUsers();
      this.users = response.data.users;
    },
    async authorization() {
      this.users.forEach(user => {
        if (this.user.login == user.login){
          if(this.user.password == user.password){
          cookies.setItem("userSession", user._id);
          this.$router.push({ name: "Products" });
          }
          else{
            alert("Something going wrong...");
          }
        }
      });
    }
  },
  mounted() {
    this.getUsers();
  },
  beforeMount() {
    if(cookies.getItem("userSession")){
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
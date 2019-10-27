<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  background-color: #1b57927e;
  height: 60px;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: flex-end;
}
.linkButton {
  border: 2px solid #2c3e50;
  border-radius: 10px;
  background-color: #b2cce6;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
  color: #1b3855;
  font-size: 20px;
}
body {
  margin: 0;
  background-color: rgba(250, 250, 250, 0.582);
}
.mainInputs {
  margin-block-start: 10px;
  margin-block-end: 10px;
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 250px;
  border: none;
  border: 1px solid #ccc;
}
</style>

<template>
  <div id="app">
    <theNav></theNav>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <theFooter></theFooter>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import theNav from "./components/theNav.vue";
import theFooter from "./components/theFooter.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    theNav,
    theFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

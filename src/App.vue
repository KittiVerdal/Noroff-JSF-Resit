<template>
  <div id="app">
    <theNav></theNav>
    <router-view></router-view>
    <theFooter></theFooter>
  </div>
</template>

<script>
import theNav from "./components/theNav.vue";
import theFooter from "./components/theFooter.vue";

export default {
  name: "app",
  components: {
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

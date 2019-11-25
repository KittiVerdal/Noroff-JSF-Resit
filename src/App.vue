<template>
  <div id="app">
    <theNav></theNav>
    <card></card>
    <theFooter></theFooter>
  </div>
</template>

<script>
import theNav from "./components/theNav.vue";
import theFooter from "./components/theFooter.vue";
import card from "./components/card.vue";

export default {
  name: "app",
  components: {
    theNav,
    theFooter,
    card
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

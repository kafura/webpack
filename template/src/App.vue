<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
      <router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link>
      <router-link :to="{ name: 'HelloHepper' }">HelloHepper</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
  @import './scss/main.scss';
</style>
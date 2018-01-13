<template>
  <div id="app">
    <div class="container">
      <nav class="tabs">
        <div class="navbar-brand">
          <!-- eslint-disable -->
          <router-link class="navbar-item" :to="{ name: 'HelloWorld' }" active-class="is-active">{{ name }}</router-link>
          <router-link class="navbar-item" :to="{ name: 'HelloHepper' }" active-class="is-active">HelloHepper</router-link>
          <!-- eslint-enable -->
        </div>
      </nav>
    </div>

    <router-view/>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong><a href="https://github.com/kafura/webpack" target="_blank">kafura/webpack</a></strong> forked from <a href="https://github.com/vuejs-templates/webpack" target="_blank">vue-cli/webpack</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>

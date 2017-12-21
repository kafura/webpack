<template>
  <div id="app">
    <div class="container">
      <nav class="tabs">
        <div class="navbar-brand">
          <router-link class="navbar-item" :to="{ name: 'HelloWorld' }" active-class="is-active">{{ name }}</router-link>
          <router-link class="navbar-item" :to="{ name: 'HelloHepper' }" active-class="is-active">HelloHepper</router-link>
        </div>
      </nav>
    </div>

    <router-view/>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>kafura/webpack</strong> forked from vue-cli/wepback
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
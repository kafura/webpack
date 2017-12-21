<template>
  <div id="app">
    <header class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hero title
          </h1>
          <h2 class="subtitle">
            Hero subtitle
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <nav class="tabs is-boxed">
            <ul>
              <li><router-link :to="{ name: 'HelloWorld' }" active-class="is-active">HelloWorld</router-link></li>
              <li><router-link :to="{ name: 'HelloHepper' }" active-class="is-active">HelloHepper</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

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
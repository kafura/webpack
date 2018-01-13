<template>
  <div>
    <header class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Hello hepper</h1>
          <h2 class="subtitle">
            This makes a call to jsonplaceholder api with axios
          </h2>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="container">
        <ui-checkbox>Klik på mig</ui-checkbox>
        <div>
          <div v-for="p in posts" :key="p.id">
            \{{ p.title }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import UiCheckbox from '@/components/ui/UiCheckbox';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'HelloHepper',
    components: {
      UiCheckbox
    },

    computed: {
      ...mapGetters('jsonplaceholder', [
        'posts'
      ])
    },

    methods: {
      ...mapActions('jsonplaceholder', [
        'getPosts'
      ])
    },

    mounted() {
      this.getPosts();
    }
  };
</script>

<style>

</style>

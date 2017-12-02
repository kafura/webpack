<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Hello hepper</h1>
      <h2 class="subtitle">
        This makes a call to jsonplaceholder api with axios
      </h2>
      <ui-checkbox>Klik på mig</ui-checkbox>
      <div>
        <div v-for="p in posts" :key="p.id">
          \{{ p.title }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import UiCheckbox from '@/components/ui/UiCheckbox';
  import { getPosts } from '@/api/jsonplaceholder';

  export default {
    name: 'HelloHepper',
    components: {
      UiCheckbox
    },
    data: () => ({
      posts: []
    }),
    mounted() {
      getPosts().then(data => {
        this.posts = data;
      });
    }
  };
</script>

<style>

</style>

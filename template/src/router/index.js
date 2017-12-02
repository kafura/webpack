import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/pages/HelloWorld';
import HelloHepper from '@/components/pages/HelloHepper';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/hepper',
    name: 'HelloHepper',
    component: HelloHepper
  }]
});

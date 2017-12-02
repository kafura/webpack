import { getPosts } from '@/api/jsonplaceholder';

const SET_LOADING = 'set_loading';
const UPDATE_POSTS = 'update_posts';

const state = {
  loading: false,
  posts: []
};

const mutations = {
  [SET_LOADING](state, loading) {
    state.loading = loading;
  },
  [UPDATE_POSTS](state, posts) {
    state.posts = posts;
  }
};

const actions = {
  getPosts({commit}) {
    commit(SET_LOADING, true);
    getPosts().then(posts => {
      commit(UPDATE_POSTS, posts);
      commit(SET_LOADING, false);
    });
  }
};

const getters = {
  posts: state => state.posts
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

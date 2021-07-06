import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogtitle: "Blog Card # 1",
        blogCoverPhoto: "stock-1",
        blogDate: "2021",
      },
      {
        blogtitle: "Blog Card # 2",
        blogCoverPhoto: "stock-2",
        blogDate: "2021",
      },
      {
        blogtitle: "Blog Card # 3",
        blogCoverPhoto: "stock-3",
        blogDate: "2021",
      },
      {
        blogtitle: "Blog Card # 4",
        blogCoverPhoto: "stock-4",
        blogDate: "2021",
      },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
  },
  actions: {},
  modules: {},
});

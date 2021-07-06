import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const localStoragePlugin = (store) => {
  store.subscribe((mutation, { user }) => {
    if (mutation.type === "setUserData") {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  });
};

export default new Vuex.Store({
  state: {
    plugins: [localStoragePlugin],
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
    user: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      isLogin: false,
    },
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    setUserData(state, { userData }) {
      state.user.firstName = userData.firstName;
      state.user.lastName = userData.lastName;
      state.user.userName = userData.userName;
      state.user.emailName = userData.emailName;
      state.user.password = userData.password;

      state.user.isLogin = true;
    },
  },
  actions: {},
  modules: {},
});

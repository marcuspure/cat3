import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
Vue.use(Vuex);
// const localStoragePlugin = (store) => {
//   store.subscribe((mutation, { user }) => {
//     if (mutation.type === "setUserData") {
//       window.localStorage.setItem("user", JSON.stringify(user));
//     }
//   });
// };

export default new Vuex.Store({
  state: {
    // plugins: [localStoragePlugin],
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
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    // doc=dbResults
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.email();
    },
    // setUserData(state, { userData }) {
    //   state.user.firstName = userData.firstName;
    //   state.user.lastName = userData.lastName;
    //   state.user.userName = userData.userName;
    //   state.user.emailName = userData.emailName;
    //   state.user.password = userData.password;

    //   state.user.isLogin = true;
    // },
  },
  actions: {
    async getCurrenUser(commit) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
  },
  modules: {},
});

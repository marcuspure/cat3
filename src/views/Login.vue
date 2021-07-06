<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        no account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >register</router-link
        >
      </p>
      <h2>login to</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="e-mail" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password" />
          <password class="icon" />
        </div>
        <div class="error" v-show="error">{{ this.errorMsg }}</div>
      </div>

      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >forgot password?</router-link
      >
      <button @click.prevent="singIn">sing in</button>
      <div class="angle"></div>
    </form>

    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {
    email,
    password,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    singIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
  // created() {
  //   if (!this.user.account) {
  //     this.$router.push("login");
  //   }
  // },

  // computed: {
  //   user() {
  //     const userData = JSON.parse(localStorage.getItem("user"));
  //     if (userData) {
  //       return userData;
  //     }
  //     return "";
  //   },
  // },
};
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 32px;
  }
  .router-link {
    color: black;
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 5 0px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: rgb(41, 40, 40);
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .inputs {
      width: 100%;
      max-width: 350px;
      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: rgb(252, 245, 234);
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus {
            outline: none;
          }
        }
        .icon {
          position: absolute;
          width: 12px;
          left: 6px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease in all;
    }
    &:hover {
      border-color: rgb(77, 74, 74);
    }

    .angle {
      display: none;
      position: absolute;
      background-color: white;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
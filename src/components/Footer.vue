<template>
  <footer>
    <div class="container">
      <div class="life">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">Cats</router-link>
          <ul>
            <li>
              <a href="#"><youtube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'blogs' }"
              >Blogs</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'newpost' }"
              >Creat Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'login' }"
              >login / Register
            </router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>2021</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";

export default {
  name: "footer-vue",
  components: {
    youtube,
    twitter,
    instagram,
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background: rgb(85, 83, 83);
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .left {
      gap: 32px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
    }
    .header {
      font-weight: 600;
      font-size: 24px;
      color: white;
      text-decoration: none;
    }
    ul {
      gap: 16px;
      list-style-type: none;
      display: flex;
    }
    .col-1,
    .col-2 {
      gap: 32px;
      display: flex;
      flex: 1;
      @media (min-width: 800px) {
        gap: 0;
      }
      .col-1 {
        flex-direction: column;
      }
    }
  }
}
</style>
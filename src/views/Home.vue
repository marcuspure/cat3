<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>view more blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>need to register!</h2>
        <router-link class="router-button" to=" #"
          >register <Arrow class="arrow arrow-light"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "welcome!~~",
        blogPost:
          "6 是你的幸運數字。在財運方面，幸運的水瓶兒，看到喜歡的東西如果可以忍耐一下，不要馬上作決定，以後會有更好的回饋。4日平常不是很熟的人會主動對你伸出援手，但有時太刻意討好別人也可能讓人懷疑你的動機。找時間跟家人談談，找尋到你意想不到的事物。今天最好的方位在偏東方，尤其是對於感情的影響更大。對於水瓶座的你而言，最幸運的顏色是橘色，尤其是橘色的雜誌能為你帶來好運。今天事業上會有好的變化。今天運氣太好了，別人是一分努力一分收穫，你則是事半功倍，不用花很多精力，就能夠有很好的結果。今天的水瓶座，需要花點時間關心自己的身體，但健康狀況是沒有問題的，多吃水果、多喝水，身體才會健康。",

        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "巨蟹座星座運勢",
          blogCoverPhoto: "beautiful-stories",
          blogHTML:
            "今天的巨蟹最幸運的顏色是灰色，特別是灰色的封面的書能為你帶來好運。今天適合前往遠方旅遊。今天的運氣相當不錯，比之前還更好。幸運的巨蟹兒，需要花點時間關心自己的身體，但健康狀況是沒有問題的，菸酒傷身，你應該很清楚怎麼樣對身體最好。1 是你想要投機時候可以參考的數字。如果談到財運，巨蟹座的你，最近投資可能會有好收穫，但還是理性為上，不要僥倖投機。4日平常不是很熟的人會主動對你伸出援手，但不要故意得罪別人。多多上網，會找到你想要的線索。今天最好的方位在西南方，特別是對於健康的影響更大。",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
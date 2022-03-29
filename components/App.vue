<!-- Main app view -->
<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Article from "./Article.vue";
import Footer from "./Footer.vue";
import BookIcon from "./BookIcon.vue";

export default {
  components: { Header, Navbar, Article, Footer, BookIcon },
  mounted() {
    console.log("Wiki endpoint:", this.$config.wikiEndpoint);
    console.log(
      "Wiki article path:",
      this.$config.wikiEndpoint + "/" + this.$config.wikiArticlePath
    );
    console.log(
      "Wiki API path:",
      this.$config.wikiEndpoint + "/" + this.$config.wikiActionApi
    );
  },
};
</script>

<template>
  <div>
    <BookIcon />
    <Header />
    <Navbar />
    <Article />
    <Footer />
  </div>
</template>

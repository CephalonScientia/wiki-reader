<!-- Main app view -->
<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Article from "./Article.vue";
import Footer from "./Footer.vue";

export default {
  components: { Header, Navbar, Article, Footer },
  mounted() {
    console.log("Wiki endpoint: ", this.$config.wikiEndpoint);
  },
};
</script>

<template>
  <div>
    <Header />
    <Navbar />
    <Article />
    <Footer />
  </div>
</template>

<!-- Main app view -->
<script>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
import Article from './Article.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Navbar,
    Article,
    Footer,
  },
  mounted() {
    console.log('On mount, this is the wiki name:', this.$config.wikiName)
  },
}
</script>

<template>
  <div>
    <Header />
    <Navbar />
    <Article />
    <Footer />
  </div>
</template>

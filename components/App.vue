<!-- Main app view -->
<script>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
import Article from './Article.vue'

export default {
  components: {
    Header,
    Navbar,
    Article
  }
}
</script>

<template>
  <div>
    <Header />
    <Navbar />
    <Article />
  </div>
</template>

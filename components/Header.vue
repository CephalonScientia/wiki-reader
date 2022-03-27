<template>
    <header>
      <h1>{{wikiName}} Reader</h1>

      <p id="tagline" style="text-align: center;">
        The <a v-bind:href="wikiUrl" target="_blank" rel="noopener noreferrer" title="Open link in new tab">{{wikiName}}</a> Reader<br />
        🔍 For a simple, lightweight, unintrusive, and ad-free wiki experience 🔎
      </p>
    </header>
</template>

<script>
export default {
  data() {
    return {
      wikiUrl: "https://en.wikipedia.org/wiki/",
      wikiName: "Wikipedia"
    }
  }
}
</script>

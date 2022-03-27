<template>
  <header>
    <h1>{{$config.wikiName}} Reader</h1>

    <p id="tagline" style="text-align: center;">
      The <a v-bind:href="$config.wikiEndpoint" target="_blank" rel="noopener noreferrer" title="Open link in new tab">{{$config.wikiName}}</a> Reader<br />
      🔍 For a simple, lightweight, unintrusive, and ad-free wiki experience 🔎
    </p>
  </header>
</template>

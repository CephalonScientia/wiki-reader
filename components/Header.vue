<script>
export default {
  name: "PageHeader",
};
</script>

<template>
  <header>
    <h1>
      <a :href="$config.wikiEndpoint" target="_blank" rel="noopener noreferrer" title="Open link in new tab">
        {{ $config.wikiName }} Reader
      </a>
    </h1>

    <p id="tagline" style="text-align: center">
      🔍 For a simple, lightweight, unintrusive, and ad-free wiki experience 🔎
    </p>
  </header>
</template>

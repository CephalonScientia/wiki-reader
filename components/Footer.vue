<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <footer>
    <ul>
      <li>
        Text contents from wiki articles are licensed under
        <a :href="$config.licenseUrl">{{ $config.license }}</a> unless otherwise specified.
      </li>
      <li>
        Media content may be subjected under a different license. See its respective article on the wiki for more details.
      </li>
    </ul>
  </footer>
</template>

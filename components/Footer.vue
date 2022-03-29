<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <footer>
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="self-center text-xl font-medium whitespace-nowrap dark:text-white">Wiki Reader</span>
      <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
        <li>
          <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
            Privacy	Policy
          </a>
        </li>
        <li>
          <a href="#" class="text-sm text-gray-500 hover:underline dark:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-500 sm:mx-auto lg:my-8" />
    <span class="block text">
      Text contents from wiki articles are licensed under
      <a :href="$config.wikiLicenseUrl">{{ $config.wikiArticleLicense }}</a> unless otherwise specified.
    </span>
    <span class="block text">
      Media content may be subjected under a different license. See its respective article on the wiki for more details.
    </span>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" class="hover:underline">Wiki Reader</a>. All Rights Reserved.
    </span>
  </footer>
</template>

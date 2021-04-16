<template>
  <footer
    class="py-8 mt-10 text-white bg-gray-900 border-t-4 border-green-700 sm:mt-20"
  >
    <div class="justify-between max-w-4xl px-4 mx-auto sm:flex">
      <div class="flex items-center">
        <p class="pr-6 text-white align-middle">© 2021 Northway</p>
        <a href="https://www.instagram.com/oh.north/" class="pr-4 align-middle">
          <Icon icon="instagram" />
        </a>
        <a href="mailto:hello@northway.blog" class="align-middle">
          <Icon icon="envelope" />
        </a>
      </div>
      <div class="mt-4 sm:mt-0">
        <n-link to="/privacy-policy" class="mr-2 text-white"
          >Privacy Policy</n-link
        >
        <n-link to="/site-note" class="text-white">Site Note</n-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '@/components/Icons/Icon.vue'

export default Vue.extend({
  components: { Icon },
})
</script>

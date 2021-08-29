<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader class="flex-0" />
    <Nuxt class="flex-1 px-4 pt-8 mx-auto md:pt-16 xl:pt-36 sm:px-6 lg:px-8" />
    <TheFooter class="flex-0" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/TheHeader/index.vue'
import TheFooter from '@/components/TheFooter/index.vue'

export default Vue.extend({
  components: { TheHeader, TheFooter },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
})
</script>

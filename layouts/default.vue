<template>
  <div id="layout">
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter />
    <CookieControl/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#layout {
  position: relative;
}

.main-content {
  margin: 4.5rem auto 0;
  padding-top: .1rem;
  overflow: auto;
}
</style>

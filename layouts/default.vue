<template lang="md">
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Titillium Web', sans-serif;
}

.main-content {
  margin: 4.5rem auto;
  max-width: 60rem;
  padding-top: 2rem;
}
</style>

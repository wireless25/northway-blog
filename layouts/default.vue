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
  font-family: 'Nunito Sans', sans-serif;
  color: #373737;
  margin: 0;
}

.main-content {
  margin: 4.5rem auto;
  max-width: 60rem;
  padding-top: .1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'PT Serif', serif;
}
</style>

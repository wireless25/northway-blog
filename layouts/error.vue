<template lang="html">
  <section class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p>Sorry we did not find this page. Go back to <a href="/">home</a></p>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="css">
.container {
  margin: 0 auto;
  max-width: 60rem;
  padding: 0 30px;
  height: calc(100vh - 300px);
  text-align: center;
}

a {
  color: #373737;
}
</style>

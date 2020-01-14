<template>
  <section>
    <img :src="hero" :alt="alt">
    <!-- <div class="hero-container">
      <div
        :style="{ backgroundImage: 'url(' + hero + ')' }"
        class="img"
      ></div>
    </div> -->
  </section>
</template>

<script>
export default {
  props: {
    hero: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

/* .img {
  padding-top: 56.25%;
  max-height: 700px;
  background-size: cover;
  -moz-background-size: cover;
  background-position: center;
}

.hero-container {
  padding: 0 30px;
} */
</style>

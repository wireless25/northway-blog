<template>
  <section>
    <figure>
      <img :src="hero | transformImage('1400x787')" :alt="alt" class="max-w-7xl w-full mx-auto mt-8 md:mt-12 lg:mt-20 px-4">
      <figcaption class="text-sm text-gray-600 text-center font-normal max-w-4xl mx-auto mt-4 mb-4 pb-4 px-4 border-b border-gray-300">{{ alt }}</figcaption>
    </figure>
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
      required: false
    }
  }
}
</script>

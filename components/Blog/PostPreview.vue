<template>
  <nuxt-link :to="'/blog/' + id" class="md:w-1/2 lg:w-1/3 px-2 lg:px-8 mt-16">
    <article>
      <img :src="thumbnailImage | transformImage('800x900')" :alt="alt" class="w-full">
      <div class="w-5/6 -mt-16 pt-2 pr-8 bg-white z-10 relative">
        <h2 class="text-2xl leading-tight mt-4">{{ title }}</h2>
        <p class="text-base mt-2">{{ excerpt }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    excerpt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
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

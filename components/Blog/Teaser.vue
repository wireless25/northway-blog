<template>
  <nuxt-link
    :to="localePath('/blog/' + id)"
    class="mt-8 md:mt-16 teaser text-nw-gray-text"
  >
    <article>
      <div class="overflow-hidden text-nw-gray-text">
        <img
          width="600"
          height="450"
          :src="thumbnailImage"
          :alt="alt"
          class="w-full"
        />
      </div>
      <div class="relative z-10 w-5/6 pt-2 pr-8 -mt-16 bg-white">
        <h2 class="mt-2 text-xl leading-tight md:text-2xl md:mt-4">
          {{ title }}
        </h2>
        <p class="mt-2 text-base">{{ excerpt }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    excerpt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnailImage: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
img {
  transition: all 0.4s ease-in-out;
}
.teaser:hover article img {
  transform: scale(1.05);
  transition: all 0.4s ease-in-out;
}
</style>

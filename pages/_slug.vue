<template>
  <div
    class="relative px-4 mx-auto prose max-w-prose md:prose-xl xl:prose-2xl sm:px-6 lg:px-8"
  >
    <nuxt-content :document="content" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const content = await $content(params.slug).fetch()

    return {
      content,
    }
  },
}
</script>

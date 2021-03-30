<template>
  <div class="max-w-full px-4 mx-auto">
    <section class="front">
      <h1 class="md:text-center px-0 mt-10 md:mt-24 lg:mt-32 xl:mt-40">
        Northway Blog
      </h1>
      <p
        class="text-lg md:text-xl lg:text-2xl md:text-center mx-auto mt-6 sm:w-3/4 md:w-1/2"
      >
        Welcome to the Northway blog. Here you will find insights about vanlife,
        camperbuilds and a lot more. Find out more about
        <n-link class="front" to="/about">Northway</n-link>
      </p>
    </section>
    <section id="posts" class="flex flex-wrap max-w-8xl mx-auto">
      <PostPreview
        v-for="post in posts"
        :id="post.slug"
        :key="post.content.slug"
        :excerpt="post.content.summary"
        :thumbnail-image="post.content.thumbnail"
        :title="post.content.title"
        :alt="post.content.alt || post.content.title"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  async asyncData(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    const posts = await context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: 'blog/'
    })

    return {
      posts: posts.data.stories
    }
  }
}
</script>

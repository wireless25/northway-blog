<template>
  <section id="posts">
    <PostPreview
      v-for="post in data.stories"
      :key="post.content.slug"
      :excerpt="post.content.summary"
      :thumbnailImage="post.content.thumbnail"
      :id="post.slug"
      :title="post.content.title" />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  data () {
    return { total: 0, data: { stories: [] } }
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'blog/'
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style scoped>
#posts {
  padding: 2rem 30px;
  float: left;
}
</style>

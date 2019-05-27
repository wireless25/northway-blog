<template>
  <section id="posts" v-if="this.total != 0">
    <PostPreview
      v-for="post in data.stories"
      :key="post.content.slug"
      :excerpt="post.content.summary"
      :thumbnailImage="post.content.thumbnail"
      :id="post.slug"
      :title="post.content.title"
      :tags="post.tag_list" />
  </section>
  <section v-else class="no-posts">
    <h1>Sorry to tell you...</h1>
    <p>...but there are no posts yet. Come back later when we published some stuff.</p>
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  data () {
    return {
      total: 0,
      data: {
        stories: []
      }
    }
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'blog/',
      // with_tag: 'solar'
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
  max-width: 70rem;
  margin: 0 auto;
}

.no-posts {
  margin: 0 auto;
  max-width: 60rem;
  padding: 0 30px;
  height: calc(100vh - 300px);
  text-align: center;
}
</style>

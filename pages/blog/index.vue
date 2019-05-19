<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id"
      :title="post.title" />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'blog/'
    }).then((res) => {
      return {
        posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail,
            title: bp.content.title
          }
        })
      }
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style scoped>
#posts {
  padding: 2rem 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>

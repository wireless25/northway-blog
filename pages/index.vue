<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id" />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          title: 'A new beginning',
          previewText: 'Subline so cool',
          thumbnailUrl: 'https://source.unsplash.com/1600x900/?vanlive/400x160',
          id: 'a-new-beginning'
        },
        {
          title: 'A beginning',
          previewText: 'Subline so cool',
          thumbnailUrl: 'https://source.unsplash.com/1600x900/?camper/400x160',
          id: 'a-beginning'
        }
      ]
    }
  }
}
</script>

<style scoped>
#posts {
  padding-top: 2rem;
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

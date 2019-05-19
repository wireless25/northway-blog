<template>
  <div id="post">
    <section class="post-content">
      <h1>{{ story.content.title }}</h1>
      <img :src="story.content.thumbnail">
      <div class="blog__body" v-html="content">
      </div>
    </section>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return { story: { content: { content: '' } } }
  },
  computed: {
    content () {
      return marked(this.story.content.content)
    }
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: 'draft'
    }).then(res => {
      return res.data
    })
  }
}
</script>

<style>
#post img {
  width: 100%;
}

.post-content {
  white-space: pre-line;
  padding: 0 30px;
}
</style>

<template>
  <div id="post">
    <section class="post-content">
      <h1>{{ story.content.title }}</h1>
      <hr class="red-divider">
      <span class="blog-date">{{ story.first_published_at | moment("D. MMMM YYYY") }}</span>
      <img :src="story.content.thumbnail">
      <div class="blog-body" v-html="content">
      </div>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  data () {
    return { story: { content: { content: '' } } }
  },
  computed: {
    content () {
      return marked(this.story.content.content)
    }
  },
  mixins: [storyblokLivePreview],
  asyncData(context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: version
    }).then(res => {
      return res.data
    })
  }
}
</script>

<style>
#post h1 {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
}
#post img {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.red-divider {
  width: 5rem;
  background: rgb(242, 115, 33);
  height: .25rem;
  margin-bottom: 2rem;
}

span.blog-date {
  font-size: 18px;
  font-size: calc((.00339*100vw + 16.57627px)*var(--scale-font));
  color: #AAAAAA;
  text-align: center;
  margin: 0 auto 3rem;
  display: block;
}

.blog-body {
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 30px;
}
</style>

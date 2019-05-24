<template>
  <section id="about-page">
    <h1>{{ story.content.title }}</h1>
    <!-- <img class="hero-img" :src="story.content.heroimg"> -->
    <Hero :hero="story.content.heroimg" />
    <div v-html="content" id="content"></div>
  </section>
</template>

<script>
import marked from 'marked'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Hero from '@/components/Hero/Hero'

export default {
  components: {
    Hero
  },
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

    return context.app.$storyapi.get('cdn/stories/about', {
      version: version
    }).then (res => {
      return res.data
    })
  }
}
</script>

<style>
#content {
  padding: 0 30px;
  max-width: 60rem;
  margin: 0 auto;
}

#about-page p {
  white-space: pre-line;
}

.hero-img {
  width: 100%;
}
</style>

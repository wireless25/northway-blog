<template>
  <section id="about-page">
    <h1>{{ story.content.title }}</h1>
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
    return {
      story: {
        content: {
          content: ''
        }
      }
    }
  },
  head () {
    return {
      title: `Northway | About us`,
      meta: [{
        hid: `description`,
        property: 'description',
        content: `Olivia and Stephan on the road with a VW T4 California from 1992. Read some insights about vanlife, camperbuilds and a lot more.`
      }]
    }
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

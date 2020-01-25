<template>
  <section id="privacy-policy-page">
    <h1 class="max-w-4xl mx-auto px-4">{{ story.content.title }}</h1>
    <Hero v-if="story.content.heroimg" :hero="story.content.heroimg" />
    <Content :content="content" />
  </section>
</template>

<script>
import marked from 'marked'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Hero from '@/components/Hero/Hero'
import Content from '@/components/Content/Content'

export default {
  components: {
    Hero,
    Content
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
      title: `Northway | Privacy Policy`,
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

    return context.app.$storyapi.get('cdn/stories/privacy-policy', {
      version: version
    }).then (res => {
      return res.data
    })
  }
}
</script>
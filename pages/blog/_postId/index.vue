<template>
  <div id="post">
    <section class="post-content">
      <h1 class="text-6xl text-center max-w-5xl mx-auto">{{ story.content.title }}</h1>
      <span class="font-serif text-xl text-gray-500 text-center mt-10 mx-auto block font-normal">{{ story.first_published_at | moment("D. MMMM YYYY") }}</span>
      <Hero :hero="story.content.thumbnail" :alt="story.content.alt" />
      <p class="font-serif text-2xl font-normal max-w-4xl mx-auto mt-16 px-4 intro">{{ story.content.summary }}</p>
      <hr class="h-1 w-24 bg-green-700 mx-auto mt-10">
      <Content :content="content" />
    </section>
  </div>
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
  head () {
    return {
      title: `Northway | ${this.story.content.title}`,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.story.content.summary
        },
        { 
          hid: 'keywords', 
          name: 'keywords', 
          content: this.story.content.keywords
        },
        {
          hid: `og:image`,
          property: "og:image",
          content: this.story.content.thumbnail
        },
        {
          hid: `og:title`,
          property: "og:title",
          content: this.story.content.title
        },
        {
          hid: `og:url`,
          property: "og:url",
          content: `https://northway.blog${this.$nuxt.$route.path}`
        }
      ]
    }
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

    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: version
    }).then(res => {
      return res.data
    })
  }
}
</script>

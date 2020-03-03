<template>
  <div id="post">
    <div class="w-full top-0">
      <n-link to="/" class="block max-w-7xl px-4 -ml-1 xl:mx-auto mt-4 md:mt-10 lg:mt-16 xl:mt-24 font-normal text-gray-600 flex back-link"><svg class="fill-current" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"></path><path d="M0-.5h48v48H0z" fill="none"></path></svg> Overview</n-link>
    </div>
    <section class="post-content">
      <h1 class="md:text-center max-w-5xl mx-auto">{{ story.content.title }}</h1>
      <span class="font-serif text-base lg:text-xl text-gray-500 text-center mt-4 md:mt-8 lg:mt-10 mx-auto block font-normal">{{ story.first_published_at | moment("D. MMMM YYYY") }}</span>
      <Hero :hero="story.content.thumbnail" :alt="story.content.alt || story.content.title" />
      <p class="font-serif text-xl md:text-2xl font-normal max-w-4xl mx-auto mt-8 md:mt-16 px-4 intro">{{ story.content.summary }}</p>
      <hr class="h-1 w-24 bg-green-700 mx-auto mt-6 md:mt-10">
      <Content :content="content" />
    </section>

    <!-- <section v-if="relatedPost">
      <n-link :to="relatedPost.slug" class="text-white h-60 pt-20 pb-24 bg-green-200 mt-20 next-post relative block">
        <div class="overflow-hidden relative h-8 next-post-next-holder">
          <span class="font-serif text-center max-w-5xl mx-auto text-xl next-post-label absolute">Next post</span>
        </div>
        <p class="text-3xl text-gray-800 text-center relative">{{ relatedPost.content.title }}</p>
      </n-link>
    </section> -->
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
  mixins: [storyblokLivePreview],
  data () {
    return { story: { content: { content: '' } } }
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/blog/${context.params.postId}`, {
      version: version
    }).then(res => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  computed: {
    content () {
      return marked(this.story.content.content)
    }
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
  }
}
</script>

<style>
.back-link svg {
  transition: all .2s ease-in-out;
}
.back-link:hover svg {
  @apply -ml-1 mr-1;
}

/* .next-post-next-holder {
  width: 92px;
  @apply mx-auto;
}

.next-post p {
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.next-post::before {
  content: "";
  top: 100%;
  transition: all .2s ease-out;
  @apply w-full h-0 bg-green-700 bottom-0 absolute;
}

.next-post:hover::before {
  @apply top-0 h-full;
}

.next-post:hover p {
  color: #fff;
}

.next-post:hover .next-post-label {
  opacity: 1;
  top: 0;
}

.next-post-label {
  opacity: 0;
  top: 1.5rem;
  transition: all .2s ease-in-out;
} */
</style>
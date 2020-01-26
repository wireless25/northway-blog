<template>
  <div class="max-w-full px-4 mx-auto">
    <section>
      <h1 class="text-center">Northway Blog</h1>
      <p class="text-lg md:text-xl lg:text-2xl text-center mx-auto mt-6 sm:w-3/4 md:w-1/2">Welcome to the Northway blog. Here wou will find travel and camping related content always up to date.</p>
    </section>
    <section id="posts" class="flex flex-wrap max-w-8xl mx-auto">
      <PostPreview
        v-for="post in filteredPosts"
        :key="post.content.slug"
        :excerpt="post.content.summary"
        :thumbnailImage="post.content.thumbnail"
        :id="post.slug"
        :title="post.content.title"
        :alt="post.content.alt" />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  data () {
    return {
      search: '',
      tag: '',
      selected: '',
      allIsActive: true,
    }
  },
  async asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    const posts = await context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'blog/',
    })

    const tags = await context.app.$storyapi.get('cdn/tags', {
      version: version,
      starts_with: 'blog/',
    })

    return {
      posts: posts.data.stories, tags: tags.data.tags
    }

  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => {
        if (this.search) {
          this.tag = ''
          this.selected = ''
          this.allIsActive = true
          return post.content.title.toLowerCase().match(this.search.toLowerCase())
        } else {
          for (var n = 0; n < post.tag_list.length; n++) {
            return post.tag_list[n].match(this.tag)
            // TODO: make sure that posts with several tags are displayed correctly
          }
        }
      })
    }
  },
  methods: {
    filterPosts(tag) {
      this.search = ''
      if (tag === '') {
        this.allIsActive = true
        this.tag = tag
        this.selected = ''
      } else {
        this.allIsActive = false
        this.tag = tag
        this.selected = tag
      }
    },
  }
}
</script>

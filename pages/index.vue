<template>
  <section id="posts">
    <nav>
      <ul id="tags-nav">
        <li class="tag" v-for="tag in tags"><a>{{ tag.name }}</a></li>
      </ul>
    </nav>
    <div class="search-input">
      <input id="search" type="text" class="" v-model="search">
      <label for="search">Search</label>
    </div>
    <PostPreview
      v-for="post in filteredPosts"
      :key="post.content.slug"
      :excerpt="post.content.summary"
      :thumbnailImage="post.content.thumbnail"
      :id="post.slug"
      :title="post.content.title"
      :tags="post.tag_list" />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  data () {
    return {
      search: ''
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
        return post.content.title.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
#posts {
  padding: 2rem 30px;
  max-width: 70rem;
  margin: 0 auto;
  display: inline-block;
}

.no-posts {
  margin: 0 auto;
  max-width: 60rem;
  padding: 0 30px;
  height: calc(100vh - 300px);
  text-align: center;
}
#tags-nav {
  list-style: none;
  overflow: hidden;
  width: fit-content;
  margin: 1.5rem auto;
}
.tag {
  float: left;
  margin: 0 20px;
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent-color);
  border-radius: 25px;
  font-weight: 700;
  font-size: 12px;
}
</style>

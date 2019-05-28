<template>
  <div id="post">
    <section class="post-content">
      <h1>{{ story.content.title }}</h1>
      <hr class="divider">
      <span class="blog-date">{{ story.content.date | moment("D. MMMM YYYY") }}</span>
      <!-- <div class="tags-container">
        <span class="tags" v-for="tag in story.tag_list">{{ tag }}</span>
      </div> -->
      <Hero :hero="story.content.thumbnail" />
      <p class="intro">{{ story.content.summary }}</p>
      <div class="blog-body" v-html="content">
      </div>
    </section>
  </div>
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
  margin-bottom: 2rem;
  padding: 0 30px;
}
#post img {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.divider {
  width: 5rem;
  background: var(--accent-color);
  height: .25rem;
  margin-bottom: 2rem;
  border: none;
}

span.blog-date {
  font-size: 18px;
  font-size: calc((.00339*100vw + 16.57627px)*var(--scale-font));
  color: #AAAAAA;
  text-align: center;
  margin: 0 auto 2rem;
  display: block;
}

.blog-body,
.intro {
  max-width: 55rem;
  margin: 0 auto;
  padding: 0 30px;
}

.intro {
  font-weight: 400;
  font-size: 18px;
  font-size: calc((.01186*100vw + 13.01695px)*var(--scale-font));
  line-height: 1.3;
  margin: 2rem auto;
}

@media (min-width: 40rem) {
  .intro {
    margin: 3.5rem auto;
  }
}

/* .tags {
  padding: .4rem 1rem;
  margin: 0 .8rem 0 0;
  background: #799695;
  color: #fff;
}

.tags-container {
  padding: 2rem 30px;
  margin: 2rem auto;
  width: fit-content;
} */
</style>

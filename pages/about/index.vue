<template>
  <section id="about-page">
    <h1>{{ story.content.title }}</h1>
    <img class="hero-img" :src="story.content.heroimg" :alt="title">
    <div v-html="content"></div>
  </section>
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
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then (res => {
      return res.data
    })
  }
}
</script>

<style>
#about-page {
  padding: 0 30px;
}

#about-page p {
  white-space: pre-line;
}

.hero-img {
  width: 100%;
}
</style>

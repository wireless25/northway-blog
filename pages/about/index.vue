<template>
  <section id="about-page">
    <h1>{{ title }}</h1>
    <img class="hero-img" :src="heroimg" :alt="title">
    <p>{{ content }}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then (res => {
      return {
        title: res.data.story.content.title,
        heroimg: res.data.story.content.heroimg,
        content: res.data.story.content.content
      }
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

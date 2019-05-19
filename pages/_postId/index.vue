<template>
  <div id="post">
    <section class="post-content">
      <h1>{{ title }}</h1>
      <img :src="image" :alt="title">
      <p>{{ content }}</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: 'draft'
    }).then(res => {
      return {
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    })
  }
}
</script>

<style>
#post img {
  width: 100%;
}

.post-content {
  white-space: pre-line;
  padding: 0 30px;
}

h1 {
  font-size: 43px;
}
</style>

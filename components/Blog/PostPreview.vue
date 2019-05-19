<template>
  <nuxt-link :to="id">
    <article class="post-preview">
      <!-- <div
        :style="{ backgroundImage: 'url(' + thumbnailImage + ')' }"
        class="post-preview-thumbnail"
      ></div> -->
      <img :src="thumbnailImage" class="post-preview-thumbnail">
      <div class="post-preview-content">
        <h2>{{ title }}</h2>
        <p>{{ excerpt }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    excerpt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #373737;
  width: 100%;
}

.post-preview {
  margin: 1rem 0;
  font-size: 14px;
}

.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
}


.post-preview-content h2 {
  font-size: 30px;
}
</style>

<template>
  <nuxt-link :to="'/blog/' + id" class="post-preview">
    <article>
      <div class="post-preview-thumbnail">
        <div
          :style="{ backgroundImage: 'url(' + thumbnailImage + ')' }"
          class="post-preview-image"
        ></div>
      </div>
      <!-- <img :src="thumbnailImage" class="post-preview-thumbnail"> -->
      <div class="post-preview-content">
        <h2>{{ title }}</h2>
        <span class="preview-tags" v-for="tag in tags">{{ tag }}</span>
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
    },
    tags: {
      type: Array
    }
  }
}
</script>

<style scoped>
.post-preview {
  margin: 1rem 0 3rem;
  text-decoration: none;
  color: #373737;
  width: 100%;
  display: block;
  float: left;
}

@media (min-width: 40rem) {
  .post-preview {
    width: calc(50% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.post-preview-content h2 {
  font-size: 30px;
  font-size: calc((.01695*100vw + 22.88136px)*var(--scale-font));
  text-align: left;
  margin: 1rem 0
}

.post-preview-content p {
  font-size: 14px;
  font-size: calc((.00508*100vw + 11.86441px)*var(--scale-font));
}

.post-preview-image {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  transition: all .3s ease;
}

/* .preview-tags {
  font-size: 14px;
  font-size: calc((.00508*100vw + 11.86441px)*var(--scale-font));
} */

.post-preview:hover .post-preview-image {
  transform: scale(1.03);
  transition: all .3s ease;
}

.post-preview:hover {
  color: var(--accent-color);
}

.post-preview-thumbnail {
  overflow: hidden;
}
</style>

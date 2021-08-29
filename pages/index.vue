<template>
  <div>
    <section class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <h1 class="px-0 md:text-center">{{ $t('front.title') }}</h1>
      <p class="mx-auto md:text-center sm:w-3/4">
        {{ $t('front.subline') }}
      </p>
    </section>
    <section
      id="posts"
      class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-16 mx-auto max-w-[120rem]"
    >
      <Teaser
        v-for="post in cloudinaryPosts"
        :id="post.slug"
        :key="post.slug"
        :excerpt="post.description"
        :thumbnail-image="post.thumbnail"
        :title="post.title"
        :alt="post.title"
      />
    </section>
  </div>
</template>

<script>
import Teaser from '@/components/Blog/Teaser'
export default {
  components: {
    Teaser,
  },
  async asyncData({ $content, i18n }) {
    const posts = await $content('posts')
      .where({ lang: i18n.locale })
      .sortBy('first_published_at', 'desc')
      .fetch()

    return {
      posts,
    }
  },
  computed: {
    cloudinaryPosts() {
      return this.posts.map((post) => {
        return {
          ...post,
          thumbnail: this.$cloudinary.image.url(post.thumbnail, {
            width: 600,
            height: 450,
            crop: 'fill',
            gravity: 'auto',
          }),
        }
      })
    },
  },
}
</script>

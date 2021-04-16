<template>
  <article>
    <div class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <h1>{{ post.title }}</h1>
      <span
        class="block mx-auto mt-4 font-serif text-base font-normal text-center text-gray-500 lg:text-xl md:mt-8 lg:mt-10"
        >{{
          $moment(post.first_published_at || post.createdAt).format(
            'D. MMMM YYYY'
          )
        }}
      </span>
    </div>
    <figure class="my-8 xl:my-20">
      <img width="1280" height="720" :src="src" :alt="post.caption" />
      <figcaption
        class="max-w-4xl px-4 pb-4 mx-auto mt-4 mb-4 text-sm font-normal text-center text-gray-600 border-b border-gray-300"
      >
        {{ post.caption }}
      </figcaption>
    </figure>

    <section class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <p class="font-serif">{{ post.description }}</p>
      <hr class="w-24 h-1 mx-auto mt-6 bg-green-700 md:mt-10" />
      <nuxt-content :document="post" />
      <nuxt-link to="/" class="flex flex-row items-center">
        <svg
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          class="inline fill-current"
        >
          <path
            d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"
          ></path>
          <path d="M0-.5h48v48H0z" fill="none"></path>
        </svg>
        <span> Overview </span>
      </nuxt-link>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, $cloudinary, params }) {
    const post = await $content('posts', params.post).fetch()
    const src = await $cloudinary.image.url(post.thumbnail, {
      width: 1280,
      height: 720,
      crop: 'fill',
      gravity: 'auto',
    })

    return {
      post,
      src,
    }
  },
  head() {
    return {
      title: `Northway | ${this.post.title}`,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.post.description,
        },
        {
          hid: `og:description`,
          property: 'op:description',
          content: this.post.description,
        },
        {
          hid: `og:type`,
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.keywords,
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: this.src,
        },
        {
          hid: `og:image:alt`,
          property: 'og:image:alt',
          content: this.post.caption,
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://northway.blog${this.$nuxt.$route.path}`,
        },
      ],
    }
  },
}
</script>

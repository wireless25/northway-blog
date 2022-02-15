<template>
  <section>
    <div class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <h1>
        {{ content.title }}
      </h1>
    </div>
    <figure>
      <img
        width="1280"
        height="720"
        :src="src"
        :alt="content.caption"
        class="w-full px-4 mx-auto mt-8 max-w-7xl md:mt-12 lg:mt-20"
      />
      <figcaption
        class="max-w-4xl px-4 pb-4 mx-auto mt-4 mb-4 text-sm font-normal text-center text-gray-600 border-b border-gray-300"
      >
        {{ content.caption }}
      </figcaption>
    </figure>
    <section class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <nuxt-content :document="content" />
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, $cloudinary, i18n, route }) {
    const pathSegments = route.path.split('/')
    const realPath = pathSegments[pathSegments.length - 1]

    const content = await $content(realPath).where({ lang: i18n.code }).fetch()
    const src = await $cloudinary.image.url(content.image, {
      width: 1280,
      height: 720,
      crop: 'fill',
      gravity: 'auto',
    })

    return {
      content,
      src,
    }
  },
  head() {
    return {
      title: `Northway | About us`,
      meta: [
        {
          hid: `description`,
          property: 'description',
          content: this.content.description,
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      en: '/about',
      de: '/ueber-uns',
    },
  },
}
</script>

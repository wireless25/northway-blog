<template>
  <div
    class="
      relative
      px-4
      mx-auto
      prose
      max-w-prose
      md:prose-xl
      xl:prose-2xl
      sm:px-6
      lg:px-8
    "
  >
    <nuxt-content :document="content" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, store, i18n, redirect }) {
    try {
      const content = await $content(params.slug)
        .where({ lang: i18n.locale })
        .fetch()

      await store.dispatch('i18n/setRouteParams', {
        en: { slug: content.en },
        de: { slug: content.de },
      })

      return {
        content,
      }
    } catch {
      redirect('/error/page-not-found')
    }
  },
}
</script>

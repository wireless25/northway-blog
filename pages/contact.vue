<template>
  <div class="w-full">
    <div class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <h1>Contact</h1>
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from '@/components/Forms/Contact.vue'

export default {
  components: {
    Contact,
  },
  head() {
    return {
      title: `Northway | Contact`,
      meta: [
        {
          hid: `description`,
          property: 'description',
          content: 'Contact us',
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      en: '/contact',
      de: '/kontakt',
    },
  },
}
</script>

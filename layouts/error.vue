<template>
  <div
    class="min-h-screen px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
  >
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-green-700 sm:text-5xl">
          {{ error.statusCode }}
        </p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              {{ $t(error.message) }}
            </h1>
          </div>
          <div
            class="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6"
          >
            <nuxt-link
              :to="localePath('/')"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {{ $t('home link') }}
            </nuxt-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

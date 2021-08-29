<template>
  <div class="flex items-center">
    <select
      id="location"
      name="location"
      class="w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
      aria-label="change language"
      @input="changeLanguage($event)"
    >
      <option
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :value="locale.code"
        :selected="$i18n.locale === locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    changeLanguage(event) {
      return this.$i18n.setLocale(event.target.value)
    },
  },
}
</script>

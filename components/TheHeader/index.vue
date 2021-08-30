<template>
  <header
    class="
      relative
      flex
      justify-between
      w-full
      h-20
      px-4
      font-light
      sm:px-6
      lg:px-8
    "
  >
    <div>
      <n-link
        :to="localePath('/')"
        class="
          flex
          select-none
          items-center
          w-[60px]
          text-[40px]
          justify-center
          h-full
          font-serif font-bold
          text-gray-800
          no-underline
          transition-all
          duration-300
          ease-in-out
          hover:bg-green-700 hover:text-white
        "
        >N</n-link
      >
    </div>
    <nav class="block h-full">
      <ul class="flex items-center justify-center h-full p-0 m-0 nav-links">
        <li class="flex items-center justify-center h-full">
          <nuxt-link
            :to="localePath('/')"
            class="nav-link hover:border-green-700 hover:border-b-2"
          >
            {{ $t('navigation.blog') }}
          </nuxt-link>
        </li>
        <li class="flex items-center justify-center h-full">
          <nuxt-link
            :to="localePath('/about')"
            class="nav-link hover:border-green-700 hover:border-b-2"
          >
            {{ $t('navigation.about') }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <LanguageSwitch />
  </header>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue'
export default {
  components: { LanguageSwitch },
}
</script>

<style scoped>
.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
  border-bottom: 3px solid #fff;
}

.nav-link.nuxt-link-exact-active {
  @apply border-b-2 border-green-700;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: #373737;
}

.nav-link a:hover,
.nav-link.nuxt-link-exact-active a:hover {
  color: var(--accent-color);
}
</style>

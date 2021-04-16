<template>
  <header class="relative w-full h-20 font-light">
    <nav class="h-full">
      <n-link
        id="logo"
        to="/"
        class="text-gray-800 hover:bg-green-700 hover:text-white"
        >N</n-link
      >
      <ul class="flex items-center justify-center h-full p-0 m-0 nav-links">
        <li class="flex items-center justify-center h-full">
          <nuxt-link
            to="/"
            class="nav-link hover:border-green-700 hover:border-b-2"
          >
            Blog
          </nuxt-link>
        </li>
        <li class="flex items-center justify-center h-full">
          <nuxt-link
            to="/about"
            class="nav-link hover:border-green-700 hover:border-b-2"
          >
            About
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
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

/* .nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #373737;
} */

#logo {
  width: 60px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  transition: background 0.3s ease;
  transition: color 0.3s ease;
  font-size: 40px;
  font-family: 'PT Serif', serif;
  font-weight: 700;
  text-decoration: none;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}

#logo:hover {
  transition: background 0.3s ease;
}
</style>

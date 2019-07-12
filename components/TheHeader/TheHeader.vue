<template>
  <header class="main-header">
    <nav class="main-nav">
      <a href="/" id="logo">N</a>
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
        <nuxt-link to="/uribag" tag="li" class="nav-link"><a>Shop</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px -7px 7px 2px #373737;
  height: 4.5rem;
}

.main-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
  border-bottom: 3px solid #fff;
}

.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid var(--accent-color);
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

.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #373737;
}

#logo {
  width: 60px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  transition: background .3s ease;
  transition: color .3s ease;
  font-size: 40px;
  font-family: 'PT Serif', serif;
  font-weight: 700;
  text-decoration: none;
  color: #373737;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}

#logo:hover {
  background: var(--accent-color);
  transition: background .3s ease;
  color: #fff;
}

</style>

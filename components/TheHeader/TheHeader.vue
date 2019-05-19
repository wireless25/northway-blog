<template>
  <header class="main-header">
    <nav class="main-nav">
      <div id="logo">
        <span>N</span>
      </div>
      <ul class="nav-links">
        <nuxt-link to="/blog" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link">
          <a>About</a>
        </nuxt-link>
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

.nav-link.nuxt-link-active {
  border-bottom: 3px solid rgb(242, 115, 33);
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: #373737;
}

.nav-link a:hover,
.nav-link.nuxt-link-active a:hover {
  color: rgb(242, 115, 33);
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
  color: #373737;
  position: absolute;
}

#logo span {
  font-size: 40px;
  font-family: 'PT Serif', serif;
  font-weight: 700;
}

</style>

<template lang="md">
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --scale-element: 1;
  --scale-font: 1;
  --accent-color: #F49D37;
}

@media(max-height: 920px) {
  :root {
    --scale-element:0.95;
    --scale-font:0.95}
}

@media(max-height: 805px) {
  :root {
    --scale-element:0.9;
    --scale-font:0.9}
}

@media(max-height: 685px) {
  :root {
    --scale-element:0.85;
    --scale-font:0.85}
}

/* body,html {
  min-height: 100vh;
  background: #fff
} */

html {
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

body {
  font-family: 'Nunito Sans', sans-serif;
  color: #373737;
  margin: 0;
  line-height: 1.7;
}

img {
    display: block;
    max-width: 100%;
    height: auto
}

.main-content {
  margin: 4.5rem auto;
  padding-top: .1rem;
  overflow: auto;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'PT Serif', serif;
  text-align: center;
  font-weight: 700;
  line-height: 1.1;
}

h1 {
  font-size: 42px;
  font-size: calc((.02881*100vw + 29.89831px)*var(--scale-font));
}

h2 {
  font-size: 18px;
  font-size: calc((.01186*100vw + 13.01695px)*var(--scale-font));
  margin: 4rem 0 2rem;
}

h3 {
  font-size: 26px;
  font-size: calc((.01017*100vw + 21.72881px)*var(--scale-font));
}

p {
  font-size: calc((.00339*100vw + 14.57627px)*var(--scale-font));
  font-weight: 100;
  white-space: pre-wrap;
}
</style>

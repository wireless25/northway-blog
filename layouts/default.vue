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
  --accent-color: #466362;
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
  font-weight: 300;
}

h1::selection,
h2::selection,
h3::selection,
h4::selection,
h5::selection,
h6::selection,
p::selection,
span::selection,
.social-link::selection,
.nav-link a::selection {
  background: var(--accent-color);
  color: #fff;
}

h1::-moz-selection,
h1::-moz-selection,
h2::-moz-selection,
h3::-moz-selection,
h4::-moz-selection,
h5::-moz-selection,
h6::-moz-selection,
p::-moz-selection,
span::-moz-selection,
.social-link::-moz-selection,
.nav-link a::-moz-selection {
  background: var(--accent-color);
  color: #fff;
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
  margin: 4rem 0 2rem;
  font-size: 26px;
  font-size: calc((.01017*100vw + 21.72881px)*var(--scale-font));
}

h3 {
  font-size: 18px;
  font-size: calc((.01186*100vw + 13.01695px)*var(--scale-font));
}

p {
  font-size: calc((.00339*100vw + 14.57627px)*var(--scale-font));
  font-weight: 300;
  white-space: pre-wrap;
}
blockquote {
  margin: 0;
}
blockquote p {
  font-size: 26px;
  font-size: calc((.01017*100vw + 21.72881px)*var(--scale-font));
  font-family: 'PT Serif', serif;
  text-align: left;
  font-weight: 700;
  line-height: 1.5;
  color: var(--accent-color);
}

input,
select,
button {
  border: solid 2px var(--accent-color);
  font-family: 'Nunito Sans', sans-serif;
  padding: 10px 1.4em 10px .8em;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 0;
  display: block;
  color: #373737;
  line-height: 1.3;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 0 .75rem;
  box-shadow: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
}
.select-css {
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
    display: none;
}
.select-css:hover {
    border-color: #888;
}
.select-css:focus,
input:focus,
button:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #373737;
    outline: none;
}
.select-css option {
    font-weight:lighter;
}
</style>

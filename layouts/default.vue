<template>
  <div id="layout">
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter />
    <CookieControl/>
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
#layout {
  position: relative;
}

.main-content {
  margin: 4.5rem auto 0;
  padding-top: .1rem;
  overflow: auto;
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

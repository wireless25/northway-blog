<template>
  <section id="default-page">
    <h1>Das hat leider nicht geklappt</h1>
    <img src="https://media.giphy.com/media/3o7qEciAHeStgj1idG/source.gif" alt="Bär wirft mit Kussherzen">
    <p>Bei der Zahlungsabwicklung ist leider etwas schief gelaufen, bitte versuch es noch einmal.</p>
    <ul class="link-list">
      <nuxt-link to="/uribag" tag="li" class="text-link"><a>Zurück zum Shop</a></nuxt-link>
      <li class="text-link"><a href="mailto:oh.northway@gmail.com">Schreib uns eine E-Mail</a></li>
    </ul>
  </section>
</template>

<script>
export default {
}
</script>

<style>
#default-page {
  padding: 2rem 30px;
  max-width: 70rem;
  margin: 0 auto;
  display: inline-block;
}
ul.link-list {
  list-style: none;
  padding: 0;
}
.text-link a {
  text-decoration: none;
  color: var(--accent-color);
}
</style>

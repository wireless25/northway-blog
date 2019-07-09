<template>
  <section id="uribag-page">
    <h1>{{ story.content.title }}</h1>
    <!-- <img class="hero-img" :src="story.content.heroimg"> -->
    <Hero :hero="story.content.product_img" />
    <div v-html="content" id="content"></div>
    <div id="buy">
      <div class="input-group email">
        <label for="email">E-Mail</label>
        <input type="text" name="email" v-model="email" placeholder="Deine E-Mail-Adresse">
      </div>
      <div class="input-group quantity">
        <label for="quantity">Anzahl</label>
        <input type="number" name="quantity" v-model.number="quantity">
      </div>
      <label for="gender">Type</label>
      <select class="gender-select select-css" name="gender" v-model="sku" required>
        <option value="" hidden>Wähle den Typ aus</option>
        <option value="sku_FO3WFIwI2mX9II">Penis</option>
        <option value="sku_FPCLMvzZi0Dgah">Vagina</option>
      </select>
      <button id="checkout-button" @click="checkoutButton(sku, quantity, email)" role="link">{{ buttontext }}</button>
      <div class="explainer">
        <small>Wenn du auf den Button <b>Jetzt kaufen</b> klickst wirst du zu Stripe weitergeleitet, unserem Partner für die Zahlungsabwicklung. Nachdem du den Kauf abgeschlossen hast, wirst du wieder zurück auf unsere Seite geleitet.</small>
      </div>
      <div id="error-message">{{ feedback }}</div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Hero from '@/components/Hero/Hero'

export default {
  components: {
    Hero
  },
  data () {
    return {
      story: {
        content: {
          content: ''
        }
      },
      sku: '',
      buttontext: 'Jetzt kaufen',
      quantity: 1,
      email: '',
      feedback: ''
    }
  },
  head () {
    return {
      title: `Uribag | Kein Platz für ein Porta Potti?`,
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        {
          hid: `description`,
          property: 'description',
          content: `Der Uribag ist die perfekte Lösung wenn du mal musst im Bus`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: "Vanlife,Reisen,Campervan,Bulli,Porta Potti,Toilette,Harndrang" }
      ]
    }
  },
  computed: {
    content () {
      return marked(this.story.content.content)
    }
  },
  mixins: [storyblokLivePreview],
  asyncData(context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories/uribag', {
      version: version
    }).then (res => {
      return res.data
    })
  },
  methods: {
    checkoutButton(sku, quantity, email) {
      Stripe('pk_test_9xgl62xyDo2kfocmZxwe2Nur00lJFWZfOr').redirectToCheckout({
        // TODO: Make possible to add several items dynamically to the checkout
        items: [{sku: sku, quantity: quantity}],
        successUrl: 'https://northway.blog/success',
        cancelUrl: 'https://northway.blog/canceled',
        customerEmail: email,
        billingAddressCollection: 'required',
      }).then((result) => {
        this.feedback = result.error.message
      }).catch(err => {
        this.feedback = err.message
      })
    }
  }
}
</script>

<style>
#content,
#buy {
  padding: 0 30px;
  max-width: 55rem;
  margin: 0 auto;
}

#uribag-page p {
  white-space: pre-line;
}

.hero-img {
  width: 100%;
}
#checkout-button {
  color: #fff;
  background-color: var(--accent-color);
  cursor: pointer;
  margin: 1.5rem 0 .75rem 0;
}
#checkout-button:hover {
  background-color: #fff;
  color: var(--accent-color);
}
</style>

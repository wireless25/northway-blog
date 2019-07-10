<template>
  <section id="product-page">
    <img class="product-img" :src="story.content.product_img">
    <div class="price">
      <span>CHF {{ story.content.price }}.-</span>
    </div>
    <h1>{{ story.content.title }}</h1>
    <div v-html="content" id="content"></div>
    <div id="buy">
      <label for="gender">Type</label>
      <select class="gender-select select-css" name="gender" v-model="sku" required>
        <option value="" hidden>Wähle den Typ aus</option>
        <option value="sku_FO3WFIwI2mX9II">Penis</option>
        <option value="sku_FPCLMvzZi0Dgah">Vagina</option>
      </select>
      <div class="input-group quantity">
        <label for="quantity">Anzahl</label>
        <input type="number" name="quantity" v-model.number="quantity">
      </div>
      <button id="checkout-button" @click="checkoutButton(sku, quantity)" role="link">{{ buttontext }}</button>
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
    checkoutButton(sku, quantity) {
      let stripeKey = process.env.NODE_ENV == 'production' ? 'pk_live_zfrzmno0ieuilND2W33LimAo00gqB08lsv' : 'pk_test_9xgl62xyDo2kfocmZxwe2Nur00lJFWZfOr'

      Stripe(stripeKey).redirectToCheckout({
        // TODO: Make possible to add several items dynamically to the checkout
        items: [{sku: sku, quantity: quantity}],
        successUrl: 'https://northway.blog/success',
        cancelUrl: 'https://northway.blog/canceled',
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
/* #content,
#buy,
#product-page h1,
.price {
  padding: 0 30px;
  max-width: 55rem;
  margin: 0 auto;
} */
#product-page {
  padding: 0 30px;
  max-width: 55rem;
  margin: 0 auto;
}
#buy {
  max-width: 20rem;
}
#product-page p {
  white-space: pre-line;
}

#product-page h1,
#product-page h2,
#product-page h3 {
  text-align: left;
}
#product-page h1 {
  font-size: 26px;
  font-size: calc((.01017*100vw + 21.72881px)*var(--scale-font));
}
#product-page h2 {
  font-size: 18px;
  font-size: calc((.01186*100vw + 13.01695px)*var(--scale-font));
}
#product-page h3 {
  font-size: 16px;
  font-size: calc((.00339*100vw + 14.57627px)*var(--scale-font));
}
#product-page #content {
  padding: 0;
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
.price {
  /* TODO: implement correct scalable font values */
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-color);
  margin: 2rem 0 1rem;
}
</style>

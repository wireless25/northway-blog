<template>
  <section id="about-page">
    <h1>{{ story.content.title }}</h1>
    <!-- <img class="hero-img" :src="story.content.heroimg"> -->
    <Hero :hero="story.content.heroimg" />
    <div v-html="content" id="content"></div>
    <label for="email">E-Mail</label>
    <input type="text" name="email" v-model="email">
    <label for="quantity">Quantity</label>
    <input type="number" name="quantity" v-model="quantity" disabled>
    <select class="quantity-select" name="quantity" v-model="sku" required>
      <option value="" hidden>Select</option>
      <option value="sku_FO3WFIwI2mX9II">Penis</option>
      <option value="sku_FPCLMvzZi0Dgah">Vagina</option>
    </select>
    <button id="checkout-button" @click="checkoutButton(sku, quantity, email)" role="link">{{ buttontext }}</button>
    <div id="error-message">{{ feedback }}</div>
    <div class="explainer">
      <small>When you click buy now you will get redirected to Stripe, our partner for payments, to fulfill the purchase. After all is good you'll get redirected to our page.</small>
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
      buttontext: 'Buy now',
      quantity: 1,
      email: '',
      feedback: ''
    }
  },
  head () {
    return {
      title: `Northway | About us`,
      meta: [{
        hid: `description`,
        property: 'description',
        content: `Olivia and Stephan on the road with a VW T4 California from 1992. Read some insights about vanlife, camperbuilds and a lot more.`
      }]
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

    return context.app.$storyapi.get('cdn/stories/about', {
      version: version
    }).then (res => {
      return res.data
    })
  },
  methods: {
    checkoutButton(sku, quantity, email) {
      Stripe('pk_test_9xgl62xyDo2kfocmZxwe2Nur00lJFWZfOr').redirectToCheckout({
        items: [{sku: sku, quantity: quantity}],
        successUrl: 'https://www.northway.blog/success',
        cancelUrl: 'https://www.northway.blog/canceled',
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
#content {
  padding: 0 30px;
  max-width: 55rem;
  margin: 0 auto;
}

#about-page p {
  white-space: pre-line;
}

.hero-img {
  width: 100%;
}
</style>

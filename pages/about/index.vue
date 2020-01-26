<template>
  <section id="about-page">
    <h1 class="text-center max-w-5xl mx-auto">{{ story.content.title }}</h1>
    <Hero :hero="story.content.heroimg" :alt="story.content.alt" />
    <Content :content="content" />
    <div class="max-w-4xl mx-auto mt-6 md:mt-16 px-4">
      <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/Ewj7z42AX"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy us a coffee"><span style="margin-left:5px">Buy us a coffee</span></a>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Hero from '@/components/Hero/Hero'
import Content from '@/components/Content/Content'

export default {
  components: {
    Hero,
    Content
  },
  data () {
    return {
      story: {
        content: {
          content: ''
        }
      }
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
  }
}
</script>

<style>
.bmc-button img{
  width: 27px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button{
  line-height: 36px !important;
  height:37px !important;
  text-decoration: none !important;
  display:inline-flex !important;
  color:#000000 !important;
  background-color:#FFFFFF !important;
  border-radius: 3px !important;
  border: 1px solid transparent !important;
  padding: 1px 9px !important;
  font-size: 22px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family:'Cookie', cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}
.bmc-button:hover, .bmc-button:active, .bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;color:#000000 !important;
}
</style>
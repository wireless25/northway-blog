<template>
  <section>
    <div class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <h1>
        {{ content.title }}
      </h1>
    </div>
    <figure>
      <img
        width="1280"
        height="720"
        :src="src"
        :alt="content.caption"
        class="w-full px-4 mx-auto mt-8 max-w-7xl md:mt-12 lg:mt-20"
      />
      <figcaption
        class="max-w-4xl px-4 pb-4 mx-auto mt-4 mb-4 text-sm font-normal text-center text-gray-600 border-b border-gray-300"
      >
        {{ content.caption }}
      </figcaption>
    </figure>
    <section class="mx-auto prose max-w-prose md:prose-xl xl:prose-2xl">
      <nuxt-content :document="content" />
    </section>
    <div class="flex justify-center px-4 mx-auto mt-6 md:mt-16">
      <link
        href="https://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
      />
      <a
        class="bmc-button"
        target="_blank"
        href="https://www.buymeacoffee.com/Ewj7z42AX"
        ><img
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy us a coffee"
        />
        <span style="margin-left: 5px">Buy us a coffee</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, $cloudinary }) {
    const content = await $content('about').fetch()
    const src = await $cloudinary.image.url(content.image, {
      width: 1280,
      height: 720,
      crop: 'fill',
      gravity: 'auto',
    })

    return {
      content,
      src,
    }
  },
  head() {
    return {
      title: `Northway | About us`,
      meta: [
        {
          hid: `description`,
          property: 'description',
          content: this.content.description,
        },
      ],
    }
  },
}
</script>

<style>
.bmc-button img {
  width: 27px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button {
  line-height: 36px !important;
  height: 37px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #000 !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  border: 1px solid transparent !important;
  padding: 1px 9px !important;
  font-size: 22px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family: 'Cookie', cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}
.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  -webkit-box-shadow: 0 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color: #000 !important;
}
</style>

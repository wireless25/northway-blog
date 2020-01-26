<template>
  <div v-html="content" id="content" class="max-w-4xl mx-auto mt-6 md:mt-16 px-4"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
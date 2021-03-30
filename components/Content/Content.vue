<template>
  <div
    id="content"
    class="max-w-4xl mx-auto mt-6 md:mt-16 px-4"
    v-html="content"
  ></div>
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

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span
    class="flex items-center justify-center w-4 h-4"
    aria-hidden="true"
    v-html="icons[icon]"
  ></span>
</template>

<script lang="ts">
import Vue from 'vue'
import * as icons from './icons'

export default Vue.extend({
  name: 'Icon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    icons(): Object {
      return icons
    },
  },
})
</script>

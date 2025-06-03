<template>
  <a
    :href="href"
    rel="nofollow noopener noreferrer"
    target="_blank"
    data-umami-event="amazon-affiliate-click"
    :data-umami-event-product="umamiEventProduct"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    href: {
      type: String,
      required: true,
    },
    trackGoalId: {
      type: String,
      default: '',
    },
    umamiEventProduct: {
      type: String,
      default: '',
    },
  },
}
</script>

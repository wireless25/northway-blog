<template>
  <a
    :href="href"
    rel="nofollow noopener noreferrer"
    target="_blank"
    @click="sendTrackGoal"
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
  },
  methods: {
    sendTrackGoal() {
      if (!process.client || !('fathom' in window) || !this.trackGoalId) {
        return
      }
      window.fathom.trackGoal(this.trackGoalId, 0)
    },
  },
}
</script>

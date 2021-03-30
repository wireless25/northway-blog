<template>
  <div id="layout">
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter />
    <CookieControl />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  margin: 4.5rem auto 0;
  padding-top: 0.1rem;
  overflow: auto;
  flex: 1;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  transform-origin: 50% 50%;
}

.page-enter-active {
  animation: acrossIn 0.5s ease-in-out;
  transition: opacity 0.8s ease-in-out;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(0, 3%, 0);
  }
  50% {
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>

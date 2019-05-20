<template>
  <footer class="bottom-footer">
    <div class="footer-container">
      <p>© 2019 Northway | <a href="https://www.instagram.com/oh.north/" class="social-link">Instagram @oh.north</a></p>
    </div>
  </footer>
</template>

<style scoped>
.bottom-footer {
  border-top: 1px solid #efefef;
  padding: 20px 30px;
  max-width: 60rem;
  margin: 0 auto;
}

.footer-container p {
  font-size: 13px;
  font-size: calc((.00254*100vw + 11.9322px)*var(--scale-font));
}

.social-link {
  color: #373737;
  text-decoration: none;
}

.social-link:hover {
  text-decoration: underline;
}
</style>

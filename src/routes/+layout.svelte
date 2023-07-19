<script>
  import GlobalStyles from '$lib/theme/GlobalStyles.svelte'
</script>

<GlobalStyles />
<div class="container">
  <header class="header">
    <h1>Svelte Jamstack Gutendex</h1>
  </header>

  <main class="main">
    <slot />
  </main>

  <footer class="footer">
    <p>
      <small>
        Data source: <a href="https://gutendex.com/" target="_blank" rel="nofollow noopener">Gutendex</a>
      </small>
    </p>
  </footer>
</div>

<style lang="scss">
  .container {
    width: 100%;
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .header,
  .footer {
    margin-block: 6rem;
  }

  .main {
    margin-block: 5rem;
  }

  .footer {
    font-style: italic;
  }
</style>

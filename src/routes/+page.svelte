<script lang="ts">
  import type { Books } from '$lib/gutendex'

  export let data: { books: Books }

  const { books } = data
</script>

<svelte:head>
  <title>Svelte Jamstack Gutendex</title>
</svelte:head>

{#if books.results.length === 0}
  <p class="no-data">データがありません。</p>
{/if}
{#if books.results.length > 0}
  <div class="book-container">
    {#each books.results as book}
      <article class="book-item">
        <!-- svelte-ignore a11y-missing-content -->
        <a class="book-item__link" href={`/book/${book.id}/`} />
        <h2 class="book-item__title">{book.title}</h2>
        <p class="book-item__author">
          著者: {book.authors[0].name}
        </p>
      </article>
    {/each}
  </div>
{/if}

<style lang="scss">
  .no-data {
    text-align: center;
  }

  .book-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    grid-gap: 3rem 2rem;
  }

  .book-item {
    position: relative;
    line-height: 1.5;

    &__link {
      position: absolute;
      inset: 0;
    }

    &__link:hover + &__title {
      text-decoration: underline;
    }

    &__title {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      word-break: break-all;
    }

    &__author {
      font-size: 0.875rem;
    }
  }
</style>

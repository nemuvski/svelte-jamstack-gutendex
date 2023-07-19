<script lang="ts">
  import { getBookEpubUrl, getBookHtmlUrl, getBookImageUrl, getBookTextFileUrl } from '$lib/gutendex'
  import type { Book } from '$lib/gutendex'

  export let data: { book: Book }

  const { book } = data

  $: bookTitle = book.title
  $: bookImageUrl = getBookImageUrl(book)
  $: authorName = book.authors[0].name
  $: birthYear = book.authors[0].birth_year
  $: deathYear = book.authors[0].death_year
  $: subjects = book.subjects
  $: epubUrl = getBookEpubUrl(book)
  $: textFileUrl = getBookTextFileUrl(book)
  $: htmlUrl = getBookHtmlUrl(book)
</script>

<svelte:head>
  <title>{bookTitle} — {authorName}</title>
</svelte:head>

<nav class="nav">
  <a href="/">一覧へ戻る</a>
</nav>
<article class="detail">
  <h1 class="detail__title">{bookTitle}</h1>

  {#if htmlUrl}
    <p class="detail__view"><a href={htmlUrl} target="_blank" rel="nofollow noopener">閲覧</a></p>
  {/if}

  {#if bookImageUrl}
    <figure>
      <img alt={bookTitle} src={bookImageUrl} />
    </figure>
  {/if}

  <dl class="detail__content-fields">
    <dt>著者</dt>
    <dd>{authorName} {birthYear || ''}–{deathYear || ''}</dd>

    <dt>カテゴリ</dt>
    <dd>
      {#if subjects.length === 0}
        -
      {/if}
      {#if subjects.length > 0}
        <ul>
          {#each subjects as subject}
            <li>{subject}</li>
          {/each}
        </ul>
      {/if}
    </dd>
  </dl>

  <ul class="detail__external-links">
    {#if epubUrl}
      <li><a href={epubUrl} target="_blank" rel="nofollow noopener">EPUBファイルをダウンロード</a></li>
    {/if}
    {#if textFileUrl}
      <li><a href={textFileUrl} target="_blank" rel="nofollow noopener">TXTファイルをダウンロード</a></li>
    {/if}
  </ul>
</article>

<style lang="scss">
  .nav {
    margin-block-end: 3.5rem;
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__title {
      font-size: 1.5rem;
    }

    &__view {
      > a {
        display: inline-block;
        padding: 0.5rem 1rem;
        color: var(--theme-color--bg);
        background-color: var(--theme-color--text);
        font-size: 0.9rem;
        text-decoration: none;
      }
    }

    &__content-fields {
      line-height: 1.8;

      > dt {
        font-style: italic;
      }

      > dd {
        margin-inline-start: 1.5rem;
      }

      > dt ~ dd + dt {
        margin-block-start: 1.5em;
      }

      ul {
        padding-inline-start: 1.5rem;
      }
    }

    &__external-links {
      padding-inline-start: 0;
      list-style: none;
      font-size: 0.9rem;
      line-height: 1.8;

      > li {
        margin-block-end: 0;
      }
    }
  }
</style>

import type { Book } from './models'

function buildGutendexBooksEndpoint() {
  const url = new URL('https://gutendex.com/books/')
  url.searchParams.set('languages', 'ja')
  url.searchParams.set('sort', 'ascending')
  return url.toString()
}

function buildGutendexBookDetailEndpoint(id: number | string) {
  return `https://gutendex.com/books/${id}`
}

function getBookImageUrl(book: Book) {
  return book.formats['image/jpeg'] || book.formats['image/png'] || book.formats['image/gif'] || null
}

function getBookEpubUrl(book: Book) {
  return book.formats['application/epub+zip'] || null
}

function getBookTextFileUrl(book: Book) {
  return book.formats['text/plain; charset=utf-8'] || book.formats['text/plain'] || null
}

function getBookHtmlUrl(book: Book) {
  return book.formats['text/html; charset=utf-8'] || book.formats['text/html'] || null
}

export {
  buildGutendexBooksEndpoint,
  buildGutendexBookDetailEndpoint,
  getBookImageUrl,
  getBookEpubUrl,
  getBookTextFileUrl,
  getBookHtmlUrl,
}

/**
 * @see {@link https://github.com/garethbjohnson/gutendex#lists-of-books}
 */
interface Books {
  count: number
  next: string | null
  previous: string | null
  results: Array<Book>
}

/**
 * @see {@link https://github.com/garethbjohnson/gutendex#book}
 */
interface Book {
  id: number
  title: string
  subjects: Array<string>
  authors: Array<Person>
  translators: Array<Person>
  bookshelves: Array<string>
  languages: Array<string>
  copyright: boolean | null
  media_type: string
  formats: Format
  download_count: number
}

/**
 * @see {@link https://github.com/garethbjohnson/gutendex#person}
 */
interface Person {
  birth_year: number | null
  death_year: number | null
  name: string
}

/**
 * @see {@link https://github.com/garethbjohnson/gutendex#format}
 */
interface Format {
  [mimeType: string]: string
}

export { type Books, type Book, type Person, type Format }

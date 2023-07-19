import type { PageServerLoad } from './$types'
import { type Books, buildGutendexBooksEndpoint } from '$lib/gutendex'

export const load = (async ({ fetch }) => {
  const req = await fetch(buildGutendexBooksEndpoint())
  const books = (await req.json()) as Books
  return { books }
}) satisfies PageServerLoad<{ books: Books }>

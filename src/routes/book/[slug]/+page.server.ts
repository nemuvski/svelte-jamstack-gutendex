import type { PageServerLoad } from './$types'
import type { Book } from '$lib/gutendex'
import { buildGutendexBookDetailEndpoint } from '$lib/gutendex'

export const load = (async ({ fetch, params }) => {
  const req = await fetch(buildGutendexBookDetailEndpoint(params.slug))
  const book = (await req.json()) as Book
  return { book }
}) satisfies PageServerLoad<{ book: Book }>

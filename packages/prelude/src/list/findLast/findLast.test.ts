import { eq } from '@briancavalier/assert'
import { Test, describe, given, it } from '@typed/test'

import { findLast } from './findLast'

export const test: Test = describe('findLast',
  given('a predicate and an array',
    it('returns the first matching element', () => {
      eq(findLast((x: number) => x < 5, [ 1, 2, 3, 4, 5 ]), 4)
    }),

    it('returns void when there are no matches', () => {
      eq(findLast((x: number) => x === 0, [ 1, 2, 3, 4, 5 ]), void 0)
    })
  )
)

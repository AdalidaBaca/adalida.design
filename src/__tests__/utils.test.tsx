import { describe, expect, it } from 'vitest'

import { titleCase } from '../utils'

describe('titleCase', () => {
  it('converts basic strings', () => {
    expect(titleCase('hello world')).toBe('Hello World')
  })

  it('handles snake_case and kebab-case', () => {
    expect(titleCase('get_well_soon')).toBe('Get Well Soon')
    expect(titleCase('post-detail-view')).toBe('Post Detail View')
  })

  it.skip('handles camelCase', () => {
    expect(titleCase('userProfileSettings')).toBe('User Profile Settings')
  })

  it('cleans up messy whitespace', () => {
    expect(titleCase('  too    many   spaces  ')).toBe('Too Many Spaces')
  })

  it('handles empty inputs safely', () => {
    expect(titleCase('')).toBe('')
  })
})

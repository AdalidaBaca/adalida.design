import { render } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import type { AxeMatchers } from 'vitest-axe/matchers'
import { toHaveNoViolations } from 'vitest-axe/matchers'

import Header from '../header'

describe('Header', () => {
  it('is logically accessible (satisfies WCAG)', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)

    // The proof now holds.
    expect(results).toHaveNoViolations()
  })
})

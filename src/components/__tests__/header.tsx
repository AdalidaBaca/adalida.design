import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe, toHaveNoViolations } from 'vitest-axe'

import Header from '../header'

expect.extend(toHaveNoViolations)

describe('Header', () => {
  it('is logically accessible (satisfies WCAG)', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

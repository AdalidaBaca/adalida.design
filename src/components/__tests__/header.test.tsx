import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'

vi.mock('@gatsbyjs/reach-router', () => ({ useLocation: () => ({ pathname: '/' }) }))

import Header from '../header'

describe('Header', () => {
  it('is logically accessible (satisfies WCAG)', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

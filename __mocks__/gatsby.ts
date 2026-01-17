import React from 'react'

const gatsby = jest.requireActual('gatsby')

interface LinkProps {
  activeClassName?: string
  activeStyle?: object
  getProps?: (props: object) => object
  innerRef?: (node: HTMLElement) => void
  partiallyActive?: boolean
  ref?: (node: HTMLElement) => void
  replace?: boolean
  to: string
}

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }: LinkProps) =>
      React.createElement('a', {
        ...rest,
        href: to
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
}

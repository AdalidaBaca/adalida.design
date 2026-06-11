import UniversalLink from 'components/universal_link'

const FOOTER_LINKS = [
  { label: 'Clients', to: '/timeline' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'Academic', to: '/academic' }
] as const

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer-inner">
      <UniversalLink to="/" className="footer-wordmark">
        adalida.design
      </UniversalLink>
      <nav className="footer-nav" aria-label="Site">
        {FOOTER_LINKS.map(({ label, to }) => (
          <UniversalLink key={to} to={to}>
            {label}
          </UniversalLink>
        ))}
      </nav>
      <p className="footer-meta">
        <span>© 2026</span>
        <span className="footer-meta-dot" aria-hidden>
          ·
        </span>
        <span>Built with Green Chile</span>
      </p>
    </div>
  </footer>
)

export default Footer

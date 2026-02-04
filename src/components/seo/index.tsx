const defaultDescription =
  'Product designer portfolio — case studies, systems design, and shipped products. Adalida Design.'

const Seo = ({ title, description }: { title: string; description?: string }): JSX.Element => {
  const metaDescription = description ?? defaultDescription
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/svg+xml" href="/favicon-blue.svg" />
    </>
  )
}

export default Seo

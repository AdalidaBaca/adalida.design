import React from 'react'

const defaultDescription = 'Rubber Duck cosplaying as a Product Designer'

const Seo = ({ title, description }: { title: string, description?: string }): JSX.Element => (
  <>
    <html lang='en' />
    <title>{title}</title>
    <meta name='description' content={description ?? defaultDescription} />
    <link rel='icon' type='image/svg+xml' href='/favicon-blue.svg' />
  </>
)

export default Seo

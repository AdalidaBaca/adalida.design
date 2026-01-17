import AdalidaFace from 'images/about/adalida_face.webp'
import BuildTimeQuery from 'queries/build_time'
import React from 'react'
import type { ProfilePage, WithContext } from 'schema-dts'

const ldJson = (buildTime: string): WithContext<ProfilePage> => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2019-10-05T07:03:03.000Z',
  dateModified: buildTime,
  mainEntity: {
    '@type': 'Person',
    name: 'Adalida Baca',
    description: 'Rubber Duck cosplaying as a Product Designer',
    image: `https://adalida.design${AdalidaFace}`,
    sameAs: 'https://www.linkedin.com/in/adalidabaca'
  }
})

const Profile = (): JSX.Element => {
  const buildTime = BuildTimeQuery()
  return <script type="application/ld+json">{JSON.stringify(ldJson(buildTime.toISOString()))}</script>
}

export default Profile

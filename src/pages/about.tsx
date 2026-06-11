import MainPage from 'components'
import Seo from 'components/seo'
import Profile from 'components/seo/profile'

const About = (): JSX.Element => {
  return <MainPage />
}

export const Head = (): JSX.Element => (
  <>
    <Seo
      title="About"
      description="Product designer and systems thinker — how I work, my academic background in English and Philosophy, and resources I publish."
    />
    <Profile />
  </>
)

export default About

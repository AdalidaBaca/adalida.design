import Image from 'components/image'
import type { Project } from 'projects'

const HeroImage = ({ project }: { project: Project }): JSX.Element => {
  const { name, heroImage } = project
  return (
    <div className="portfolio-container-for-hero-image">
      <Image className="portfolio-hero-image" alt={`${name} cover`} path={heroImage} objectFit="contain" />
    </div>
  )
}

export default HeroImage

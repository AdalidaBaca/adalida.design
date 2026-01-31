import { GatsbyImage, type GatsbyImageProps, getImage } from 'gatsby-plugin-image'
import useImageByPath from 'queries/image'

interface Props extends Omit<GatsbyImageProps, 'image'> {
  path: string
}

const Image = ({ path, ...gatsbyImageProps }: Props): JSX.Element => {
  const imageData = useImageByPath(path)
  const image = getImage(imageData)
  if (image === undefined) {
    throw new Error(`Image not found: ${path}`)
  }
  return <GatsbyImage image={image} {...gatsbyImageProps} />
}

export default Image

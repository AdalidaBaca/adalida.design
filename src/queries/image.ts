import { graphql, useStaticQuery } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

/**
 * Custom hook that runs useStaticQuery at the top level and returns gatsbyImageData for the given path.
 * Required so useStaticQuery is not called from a plain function (which breaks Gatsby/React hooks rules).
 */
function useImageByPath(imagePath: string): IGatsbyImageData {
  const edges = useStaticQuery(graphql`
    query AllImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
            relativePath
          }
        }
      }
    }
  `).allFile.edges

  const desiredRelativePath = imagePath.replace(/^\/?(images)?\//, '')
  const match = edges.find(
    ({ node: { relativePath } }: { node: { relativePath: string } }): boolean => relativePath === desiredRelativePath
  )
  if (match !== undefined && match.node.childImageSharp?.gatsbyImageData !== undefined) {
    return match.node.childImageSharp.gatsbyImageData
  }

  throw new Error(`No image found for ${imagePath}`)
}

export default useImageByPath

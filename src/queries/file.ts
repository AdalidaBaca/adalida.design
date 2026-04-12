import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'

interface FileNode {
  publicURL: string
  name: string
  relativePath: string
}

/**
 * Runs exactly one `useStaticQuery` per component. Return value is a resolver — call it as many
 * times as needed for different paths. (Multiple `useStaticQuery` calls in one component breaks
 * Gatsby’s static query payload.)
 */
function useResolveFile(): (filePath: string) => FileNode {
  const edges = useStaticQuery(graphql`
    query AboutFilesStaticQuery {
      allFile(filter: { sourceInstanceName: { eq: "files" } }) {
        edges {
          node {
            publicURL
            name
            relativePath
          }
        }
      }
    }
  `).allFile.edges

  return useMemo(() => {
    return (filePath: string): FileNode => {
      const desiredRelativePath = filePath.replace(/^\/?(files)?\//, '')
      const file = edges.find(
        ({ node: { relativePath } }: { node: { relativePath: string } }): boolean =>
          relativePath === desiredRelativePath
      )
      if (file === undefined) {
        throw new Error(`No file found for ${filePath}`)
      }
      return file.node
    }
  }, [edges])
}

export default useResolveFile

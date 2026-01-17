import { graphql, useStaticQuery } from 'gatsby'

interface File {
  publicURL: string
  name: string
  relativePath: string
}

const FileQuery = (filePath: string): File => {
  const files = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "files"}}) {
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

  // Files will likely come in with a /files/...
  // The relativePath in the query does not start with /files or a slash.
  const desiredRelativePath = filePath.replace(/^\/?(files)?\//, '')
  const file = files.find(({ node: { relativePath } }: { node: { relativePath: string } }): boolean => (
    relativePath === desiredRelativePath
  ))
  if (file !== undefined) return file.node

  throw new Error(`No file found for ${filePath}`)
}

export default FileQuery

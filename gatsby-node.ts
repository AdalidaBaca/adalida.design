import path from 'node:path'
import type { CreateWebpackConfigArgs } from 'gatsby'

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  // Allow absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules']
    }
  })
}

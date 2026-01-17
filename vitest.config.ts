import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.ts']
  },
  resolve: {
    alias: {
      '@reach/router': '@gatsbyjs/reach-router'
    }
  }
})

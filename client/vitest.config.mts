import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/vitest_tests/**/*.vitest.js'],
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
})

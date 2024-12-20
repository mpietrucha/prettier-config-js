import { defineConfig } from 'vitest/config'
import { alias } from './build.config.js'

export default defineConfig({
    resolve: { alias },
})

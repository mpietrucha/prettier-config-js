import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    declaration: false,
    rollup: {
        inlineDependencies: true,
        output: { exports: 'default' },
    },
    alias: { '~': __dirname, '@': resolve(__dirname, 'src') },
})

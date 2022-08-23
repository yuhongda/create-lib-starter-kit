import dts from 'rollup-plugin-dts'
import type { RollupOptions } from 'rollup'

const format = process.env.FORMAT || 'dts'

const config: RollupOptions = {
  input: './src/index.ts',
  plugins: []
}

if (format === 'dts') {
  config.output = {
    format: 'es',
    file: 'types/index.d.ts'
  }
  config.plugins = [dts()]
}

export default config

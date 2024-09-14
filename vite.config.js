
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import h5ProdEffectPlugin from 'uni-vite-plugin-h5-prod-effect'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      Uni(),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.md$/],
        imports: [
          'vue',
          'pinia',
          'uni-app',
        ],
        eslintrc: {
          enabled: true,
        },
        dirs: ['src/store', 'src/common', 'src/hooks'],
        vueTemplate: true,
        dts: 'types/autoImport.d.ts',
      }),
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
        },
      },
      rollupOptions: {
        // external: ['regenerator-runtime'],
      },
    },
  }
  // 只有h5才有用
  if (process.env.UNI_PLATFORM === 'h5') {
    config.plugins.push(h5ProdEffectPlugin())
  }

  return config
})

// vite configuration file
// read more about it here: https://vitejs.dev/config/
import { defineConfig } from 'vite'
import { resolve } from 'path'
import fastglob from 'fast-glob'
import handlebars from 'vite-plugin-handlebars'

const rootPath = 'src/root'

function getHtmlFiles() {
  const htmlFiles = fastglob.sync([`${rootPath}/**/*.html`])

  return htmlFiles.reduce((acc, path) => {
    const slug = path
      .replace(`${rootPath}/`, '')
      .replace('.html', '')
      .replace('/', '-')
      .toLowerCase()

    acc[slug] = path

    return acc
  }, {})
}

export default defineConfig({
  root: resolve(__dirname, rootPath),
  // Directory to serve as plain static assets.
  publicDir: resolve(__dirname, 'public'),
  // Adjust console output verbosity.
  logLevel: 'info',
  // development server configuration
  server: {
    // Vite 4 defaults to 5173, but you can override it with the port option.
    port: 3000,
  },
  build: {
    outDir: resolve(__dirname, 'dist'),

    // Remove the dist directory before building
    emptyOutDir: true,

    // Do not warn about large chunks
    // chunkSizeWarningLimit: Infinity,

    // Double the default size threshold for inlined assets
    // https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: 4096 * 2,

    rollupOptions: {
      input: getHtmlFiles(),

      /**
       * Uncomment this section to build the demo with missing images
       * Don't forget to remove this section when you replaced assets with yours
       */
      // external: [
      //   /\/demo\/.*/,
      // ],
    },
  },
  plugins: [
    /**
     * vite-plugin-handlebars plugin allow partials includes
     *
     * @see https://github.com/alexlafroscia/vite-plugin-handlebars
     */
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'src/partials'),
        resolve(__dirname, 'src/layouts'),
      ],
      reloadOnPartialChange: false,
    }),
  ],
})

import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  // minify: true,
  sourcemap: true,
  target: ["es6"],
  outfile: 'dist/index.js',
})

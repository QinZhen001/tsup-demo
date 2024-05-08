import { defineConfig } from 'tsup'


export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  // minify: false,
  format: ['cjs', 'esm',"iife"], 
  target: 'es5',  
  clean: true,
  dts: true,
  // treeshake: true,
})

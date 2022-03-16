import esbuild from 'esbuild'


export const baseOptions = {
  entryPoints: ['./lib/index.ts'],
  plugins: [],
  bundle: true,
  splitting: false,
  format: 'esm',
  outfile: 'index.js',
  platform: 'browser',
  target: 'esnext',
  minify: true,
  treeShaking: true,
  external: ['@decentraland'],
}


await esbuild.build(baseOptions)

console.log('Build succesful')

const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./main-entry.ts'],
    outfile: './src/dist/bundle.js',
    bundle: true,
    format: 'esm',
    target: ['es6']
}).catch(() => process.exit(1));

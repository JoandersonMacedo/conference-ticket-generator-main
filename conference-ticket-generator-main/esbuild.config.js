const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./main-entry.ts'],
    outfile: './src/dist/bundle.js',
    bundle: true,
    format: 'esm',
    plugins: [
        {
            name: 'babel',
            setup(build) {
                build.onLoad({ filter: /\.js$/ },
                    async (args) => {
                        const source = await require('fs').promises.readFile(args.path, 'utf8');
                        const result = await babel.transformAsync(source, {
                            filename: args.path,
                            configFile: './babel.config.js',
                            sourceMaps: true,
                        });
                        return { contents: result.code, loader: 'js', };
                    });
            },
        },
    ],
}).catch(() => process.exit(1));

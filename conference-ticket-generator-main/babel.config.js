module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current',
            },
        }],
    ],
    plugins: [
        function myImportToFunctionPlugin() {
            return {
                visitor: {
                    ImportDeclaration(path) {
                        const importName = path.node.specifiers[0].local.name;
                        const importSource = path.node.source.value;
                        path.replaceWithSourceString(
                            `function ${importName}() { return require('${importSource}'); }`
                        );
                    },
                },
            };
        },
    ],
};

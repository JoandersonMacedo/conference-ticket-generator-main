const fs = require('fs');
const glob = require('glob');
const path = require('path');

const entryFiles = glob.sync('ts/**/*.ts');

// const importStatements = entryFiles.map(file => {
//     const filePath = `./${file.replace('src/', '').replace(/\\/g, '/')}`;
//     return `import * as ${path.basename(file, '.ts')} from '${filePath}';`;
// }).join('\n');

// const exportStatements = entryFiles.map((file, index) => {
//     if(index === 0) {
//         return `export { ${path.basename(file, '.ts')}, `
//     }

//     if(index === entryFiles.length - 1) {
//         return `${path.basename(file, '.ts')} }`
//     }

//     return `${path.basename(file, '.ts')}, `
// }).join('');

// const content = `${importStatements}\n\n${exportStatements}`;

const content = `${importStatements}`;



fs.writeFileSync('./main-entry.ts', content);

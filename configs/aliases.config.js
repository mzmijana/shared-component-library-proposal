const path = require('path')

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    '@human/example': path.resolve(__dirname, '../src/human/src/Example/index'),
    '@netgen/example': path.resolve(__dirname, '../src/netgen/src/Example/index')
}

// eslint-disable-next-line import/no-commonjs
module.exports = { aliases }

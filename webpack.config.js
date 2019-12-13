const { rules } = require('./configs/rules.config')
const { aliases } = require('./configs/aliases.config')

// eslint-disable-next-line import/no-commonjs
module.exports = {
    module: {
        rules
    },
    resolve: {
        alias: aliases,
        extensions: ['.js', '.json'],
        modules: ['node_modules']
    }
}

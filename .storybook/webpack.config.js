const { rules } = require('../configs/rules.config')
const { aliases } = require('../configs/aliases.config')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config /* , mode */ }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    rules.forEach(rule => config.module.rules.push(rule))
    config.module.resolve.alias = aliases

    // Return the altered config
    return config
}

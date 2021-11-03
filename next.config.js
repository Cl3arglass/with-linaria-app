const withLinaria = require('next-linaria')

module.exports = withLinaria({ linaria: {
    cacheDirectory: '.next/cache/linaria'
}})

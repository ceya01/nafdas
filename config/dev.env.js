'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIURL_GET_TWITTER_DATA: '"http://localhost/works/nafdas/api/getTwitterData.php"'
})

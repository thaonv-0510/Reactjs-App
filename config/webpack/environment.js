const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const erb = require('./loaders/erb')
const customConfig = require('./custom');

environment.loaders.prepend('erb', erb)
environment.loaders.prepend('typescript', typescript);
environment.config.merge(customConfig)
module.exports = environment

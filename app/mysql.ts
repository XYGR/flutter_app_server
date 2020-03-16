const config = require('./config')

let knex = require('knex')(config.mysql);
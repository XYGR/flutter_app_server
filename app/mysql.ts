var config = require('./config');

module.exports = require('knex')(config.mysql); 
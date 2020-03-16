const config = require('./config')

let mysql:any = require('knex')(config.mysql);


module.exports = mysql; 
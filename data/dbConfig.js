const knex = require('knex')
require('dotenv').config()
const environment = process.env.NODE_ENV
const knexConfig = require('../knexfile.js')
module.exports = knex(knexConfig[environment])
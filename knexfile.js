// Update with your config settings.
require('dotenv').config()
const pgConnection = process.env.DATABASE_URL
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'GranDesigns',
      user: 'postgres',
      password: 'marctapp'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: pgConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};

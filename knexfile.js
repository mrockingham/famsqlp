// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: 'localhost',
      database: 'famdb',
      user:     'postgres',
      password: 'battlezon2'
    },
  
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    
  },




  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'famDB.sql',
      user:     'postgres',
      password: 'battlezon2'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};

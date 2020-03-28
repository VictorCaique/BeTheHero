// Update with your config settings.

module.exports = {
/* Area de Desenvolvimento */
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
  migrations: {
    directory: './src/database/migrations',
  },
    useNullAsDefault: true,
},
/* Area que simula a produção */
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
/* Ambiente de Produção */
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

module.exports = {

    development: {
        client: 'mysql2',
        useNullAsDefault: true,
        connection: {filename: './data/auth.db3'},
        migrations: {directory: './data/migrations'},
        seeds: {directory: './data/seeds'},
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          directory: './data/migrations',
          tableName: 'knex_migrations'
        },
        seeds: {
          directory: './data/seeds'
        }
    }
};
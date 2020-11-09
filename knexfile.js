module.exports = {
  // developemt database code: 
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },

    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done)
    //   },
    // },
    
  },

// to switch between development and testing run < npx knex migrate:latest --env=development > and
// < npx knex migrate:latest --env=testing >, respectively, in the terminal 

  // testing database code:
  testing: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },

    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done)
    //   },
    // },
    
  },
};

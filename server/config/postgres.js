const { Pool } = require('pg');

module.exports = app => {
  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */

  return new Pool({
    /**
     *  @TODO: Supply the correct configuration values to connect to postgres
     */
    Host: app.get('PG_HOST'),
    User: app.get('PG_USER'),
    Password: app.get('PG_PASSWORD'),
    Database: app.get('PG_DB'),

    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  });
};

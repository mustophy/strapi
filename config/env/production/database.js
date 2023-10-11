const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("postgres://cciavbie:alqXDdzEsm4K3aE9fIlAn3fWlmz9o0KK@peanut.db.elephantsql.com/cciavbie"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password
      },
      debug: false,
    },
  };
};
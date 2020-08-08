const knex = require("knex")

const conn = knex({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "proffy"
    },
    useNullAsDefault: true
})

module.exports = conn
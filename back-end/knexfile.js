module.exports = {
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "proffy"
    },
    migrations: {
        directory: "./database/migrations"
    },
    useNullAsDefault: true
}
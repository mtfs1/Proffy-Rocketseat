exports.up = function(knex) {
    return knex.schema.createTable("connections", t => {
        t.increments("id").primary()
        t.integer("proffy_id")
            .notNull()
            .unsigned()
            .references("id")
            .inTable("proffies")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        t.timestamp("created_at")
            .notNull()
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("connections")
};

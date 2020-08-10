exports.up = function(knex) {
    return knex.schema.createTable("classes", t => {
        t.increments("id").primary()
        t.string("subject").notNull()
        t.decimal("price").notNull()
        t.integer("proffy_id", 10)
            .notNull()
            .unsigned()
            .references("id")
            .inTable("proffies")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("classes")
};
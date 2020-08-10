exports.up = function(knex) {
  return knex.schema.createTable("proffies", t => {
    t.increments("id").primary()
    t.string("name").notNull()
    t.text("link").notNull()
    t.string("whatsapp").notNull()
    t.text("bio").notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("proffies")
};

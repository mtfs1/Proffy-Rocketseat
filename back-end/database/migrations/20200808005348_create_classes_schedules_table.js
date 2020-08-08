exports.up = function(knex) {
    return knex.schema.createTable("classes_schedules", t => {
        t.increments("id").primary()
        
        t.string("week_day")
        t.integer("hour_begin")
        t.integer("hour_end")

        t.integer("class_id")
            .notNull()
            .unsigned()
            .references("id")
            .inTable("classes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("classes_schedules")
};

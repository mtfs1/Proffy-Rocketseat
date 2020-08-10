exports.up = function(knex) {
    return knex.schema.createTable("classes_schedules", t => {
        t.increments("id").primary()
        
        t.integer("week_day")
        t.integer("minute_begin")
        t.integer("minute_end")

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

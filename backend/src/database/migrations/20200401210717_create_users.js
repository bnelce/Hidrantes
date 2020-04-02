
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
      table.string('id').primary();
  })
};

exports.down = function(knex) {
  
};

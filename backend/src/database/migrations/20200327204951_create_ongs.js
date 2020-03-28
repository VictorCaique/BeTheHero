
exports.up = function(knex) {  // Método up é responsavel pela criação da tabela
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

  })
};

exports.down = function(knex) {  // Método down é responsavel pelo delete da tabela
    return knex.schema.dropTable('ongs');
};

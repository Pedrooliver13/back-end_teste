import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('historico', (table) => {
    table.increments('id').primary();
    table.integer('competidor_id').notNullable();

    table
      .foreign('competidor_id')
      .references('id')
      .inTable('competidores')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('pista_id').notNullable();

    table
      .foreign('pista_id')
      .references('id')
      .inTable('pistas')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.string('data_corrida').notNullable();
    table.decimal('tempo').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('historico');
}

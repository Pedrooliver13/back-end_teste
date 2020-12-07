import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('competidores', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('sexo', 1).notNullable();
    table.decimal('temperatura').notNullable();
    table.decimal('peso').notNullable();
    table.decimal('altura').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("competidores");
}
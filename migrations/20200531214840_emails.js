exports.up = function (knex, Promise) {
    return knex.schema.createTable('emails', function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments();
        table.text('SentFrom').notNullable().defaultTo('');
        table.text('SentTo').notNullable().defaultTo('');
        table.text('SentCC').notNullable().defaultTo('');
        table.datetime('ReceivedDate', { precision: 6 }).notNullable();
        table.text('EmailSubject').notNullable().defaultTo('');
        table.text('EmailBody').notNullable().defaultTo('');
        table.text('PlainTextBody').notNullable().defaultTo('');
        table.string('MessageIdentifier').notNullable().defaultTo('');
        //table.timestamps(true, true).notNullable().defaultTo(knex.raw('now()'))
        // OR
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        //table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
        //table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
    })
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('emails')
}

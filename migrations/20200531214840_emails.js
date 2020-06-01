exports.up = function (knex, Promise) {
    return knex.schema.createTable('tablename', function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments()
        table.text('SentFrom').notNullable().defaultTo('')
        table.text('SentTo').notNullable().defaultTo('')
        table.text('SentCC').notNullable().defaultTo('')
        table.datetime('ReceivedDate', { precision: 6 }).notNullable().defaultTo('')
        table.text('EmailSubject').notNullable().defaultTo('')
        table.text('EmailBody').notNullable().defaultTo('')
        table.text('PlainTextBody').notNullable().defaultTo('')
        table.string('MessageIdentifier').notNullable().defaultTo('')
        table.timestamps(true, true)
        // OR
        // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
        // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
    })
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('tablename')
}

let knex = require('knex');

function loadEmails( file ) {
    knex('emails')
        .insert({ SentFrom: file.SentFrom  })
}

module.exports = { loadEmails }
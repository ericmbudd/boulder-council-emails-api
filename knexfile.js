// Update with your config settings.

// Define DB connections for different environments
module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/bcc-emails-dev'
    },
    test: {},
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
}



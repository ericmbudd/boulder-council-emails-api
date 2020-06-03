var parseEmails = require('./parse_emails.js');
var loadData = require('./load_data.js');
const { testRecord } = require('./testRecord.js');

//console.log('no')
//console.log(testRecord)
loadData.loadEmails(testRecord);
//parseEmails.parseFromLocalFile()

/*
parseEmails.myFetch()
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message)
    .then(parseEmails.parse(e))
    });
*/

//parseEmails.parse();


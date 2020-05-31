const neatCsv = require('neat-csv');
const fs = require('fs')
const http = require('http');
const request = require('request');
//const fetch = require('node-fetch');

function downloadFile(url, dest, cb) {
    url = 'http://www-static.bouldercolorado.gov/docs/opendata/CouncilEmails_HTML2020.csv'
    dest = 'test2.csv';

    const file = fs.createWriteStream(dest);
    const sendReq = request.get(url);

    // verify response code
    sendReq.on('response', (response) => {
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }

        sendReq.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request errors
    sendReq.on('error', (err) => {
        fs.unlink(dest);
        return cb(err.message);
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        return cb(err.message);
    });
};

async function myFetch() {
    let response = await fetch('http://www-static.bouldercolorado.gov/docs/opendata/CouncilEmails_HTML2020.csv');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        console.log(response)
        console.log ("got file")
        /*
        let myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
        */
    }
}

function parseFromFile() {
    fs.readFile('./CouncilEmails_HTML2020.csv', async (err, data) => {
        let response = await neatCsv(data);

        if (err) {
            console.error(err)
            return
        }
        console.log(response[0])
    })
};

function parseFromFile( input ) {
    fs.readFile(input, async (err, data) => {
        let response = await neatCsv(data);

        if (err) {
            console.error(err)
            return
        }
        console.log(response[0])
    })
};

//parseEmails()
module.exports = { myFetch, parseFromFile, downloadFile };
// index.js
const prompt = require('prompt');
const { backupWebsite } = require('./backupWebsite');

prompt.start();

const url = process.argv[2];

if (!url) {
    console.error("Please provide a URL to back up.");
    process.exit(1);
}

prompt.get({
    properties: {
        frequency: {
            description: "Please choose backup frequency (1:One-time, 2:Daily, 3:Weekly, 4:Monthly)"
        }
    }
}, function (err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    backupWebsite(url, result.frequency);
});

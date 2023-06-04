#!/usr/bin/env node

const prompt = require('prompt');
const colors = require('colors');
const { backupWebsite } = require('./backupWebsite');

prompt.message = '';
prompt.delimiter = '';
prompt.start();

prompt.colors = false;

const url = process.argv[2];

if (!url) {
    console.error("Please provide a URL to back up.");
    process.exit(1);
}

prompt.get({
    properties: {
        frequency: {
            description: colors.cyan("Please choose backup frequency (1:One-time, 2:Daily, 3:Weekly, 4:Monthly)"),
            message: colors.red("Frequency is required"),
            required: true
        }
    }
}, function (err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    backupWebsite(url, result.frequency);
});

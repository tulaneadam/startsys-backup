#!/usr/bin/env node
const { spawn } = require('child_process');
const prompt = require('prompt');

function backupWebsite(url, frequency) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-").split("T");
    const backupFolderName = `backup/${url.replace(/[^a-zA-Z0-9]/g, "-")}-${timestamp[0]}-${timestamp[1]}`;

    const command = 'wget';
    const parameters = ['-P', backupFolderName, '-e', 'robots=off', '--mirror', '--convert-links', '--adjust-extension', '--page-requisites', '--no-parent', url];

    console.log(`Starting backup for ${url}`);
    const start = new Date();
    const wget = spawn(command, parameters);

    wget.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    wget.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    wget.on('close', (code) => {
        const end = new Date();
        const duration = (end - start) / 1000;

        if (code !== 0) {
            console.log(`wget process exited with code ${code}. Duration: ${duration} seconds`);
        } else {
            console.log(`Website backup completed successfully. Duration: ${duration} seconds`);
        }

        if (frequency === "Daily" || frequency === "Weekly" || frequency === "Monthly") {
            const milliseconds = {
                "Daily": 24 * 60 * 60 * 1000,
                "Weekly": 7 * 24 * 60 * 60 * 1000,
                "Monthly": 30 * 24 * 60 * 60 * 1000,
            }[frequency];
            setTimeout(() => backupWebsite(url, frequency), milliseconds);
        }
    });
}

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

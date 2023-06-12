# startsys-backup README

`startsys-backup` is simple backup utility to make repeated or single use website backups to html using wget. 

This application requires `wget` to be installed on your system. Below are the instructions for installing `wget` for different operating systems:

## Windows

1. Download and install [Git Bash](https://gitforwindows.org/), which comes with `wget`.
2. To check the installation, open Git Bash and type `wget --version`. 

## macOS

1. If you have [Homebrew](https://brew.sh/) installed, you can install `wget` by typing `brew install wget` in Terminal.
2. To check the installation, open Terminal and type `wget --version`.

## Linux (Debian-based)

1. `wget` is usually pre-installed on most Linux distributions. If not, you can install it by typing `sudo apt-get install wget` in the Terminal.
2. To check the installation, open Terminal and type `wget --version`.

After `wget` is installed, you can install `startsys-backup` by running `npm install -g startsys-backup` in your terminal.

To backup a website, run `startsys-backup <url>` (Ex. startsys-backup https://www.startup-systems.com/ ). You'll then be prompted to choose the backup frequency (1:one-time, 2:daily, 3:weekly, or 4:monthly).

Please note that if you choose daily, weekly, or monthly, the backups will run at the time you start the command and will continue at the same time based on the frequency you chose.

## Github

The link to this project on github is https://github.com/tulaneadam/startsys-backup


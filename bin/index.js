#!/usr/bin/env node


const { exec } = require("child_process")

const args = process.argv.slice(2)


const branch = args[0] || 'develop'

console.log('\x1b[35m', 'removing all local git branches except ' + branch + ' - 🦐')

exec(`git branch | grep -v \"${branch}\" | xargs git branch -D`, (error, stdout, stderr) => {
    if (error) {
        console.log('\033[31m', `error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log('\033[31m', `stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`)
})
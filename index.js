#!/usr/bin/env node

const listDir = process.platform === 'win32' ? 'dir' : 'ls -a';

// ensure we are in a sfdx project first
let exec = require('child_process').exec; 
exec(listDir, (err, stdout, stderr) => {
  if (stdout.includes('.forceignore')) {
    followYargs();
  } else {
    console.log('Please navigate to your DX project and try again')
  }
});
 

// console.log(process.platform);

/**

1.2 – sfdx force:mdapi:retrieve -s -r <file/path/toPlace> -u -p ‘’ (need to review all flags)

1.2 – sfdx force:user:display
1.2 – sfdx force:limits:api:display

1.2 – sfdx force:user:password:generate

 */

/**
 * @description router for commands after rsdx is called in terminal
 * @method followYargs
 */
function followYargs() {
  const argv = require('yargs')
    .usage('rsdx <command>')
      .command('convert')
      .command('create', 'create command', require('./commandModules/create.js'))
      .command('delete', 'Delete Command', require('./commandModules/delete.js'))
      .command('deploy')
      .command('display')
      .command('export')
      .command('generate')
      .command('get')
      .command('import')
      .command('install', 'Installs a package in the target org.', require('./commandModules/install.js'))
      .command('list', 'use when a list is expected to be returned', require('./commandModules/list.js'))
      .command('login')
      .command('open', 'Open command', require('./commandModules/open.js'))
      .command('pull', 'Pull Command', require('./commandModules/pull.js'))
      .command('push', 'Push Command', require('./commandModules/push.js'))
      .command('query')
      .command('report')
      .command('retrieve')
      .command('run')
      .command('set', 'Set command', require('./commandModules/set.js'))
      .command('upgrade')
    .help()
    .argv
}
//"preinstall": "npm install --global sfdx-cli",
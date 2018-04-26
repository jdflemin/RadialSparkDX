/**
 * @description creates scratch org
 * @method scratchOrgCreateHandler
 * @param {array} argv 
 */
function scratchOrgCreateHandler(argv) {
    let baseCommand = 'sfdx force:org:create';
    const yargs = require('yargs')
      .option('d', {alias: 'duration', demandOption: false, desc: 'default of 7 days, but can range from 1-30'})
      .option('h', {alias: 'DevHub', demandOption: true, desc: 'alias of parent DevHub to this Scratch Org'})
      .option('a', {alias: 'alias', demandOption: true, desc: 'alias name of this Scratch Org'})

    baseCommand += ` -f config/project-scratch-def.json -v ${yargs.argv.h} -a ${yargs.argv.a}`;

    if(yargs.argv.d) baseCommand += ` -d ${yargs.argv.d}`;

    let exec = require('child_process').exec; 

    exec(baseCommand, (err, stdout, stderr) => {
      if (err) {
        // err stuff
      } else {
        // not err stuff
      }
      // happen regardless stuff
    });
    
}

// export module
module.exports = {
    handler: scratchOrgCreateHandler
};
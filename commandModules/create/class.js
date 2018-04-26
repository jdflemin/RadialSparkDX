/**
 * @description creates scratch org
 * @method classCreateHandler
 * @param {array} argv 
 */
function classCreateHandler(argv) {
    let baseCommand = 'sfdx force:apex:create:create';
    const yargs = require('yargs')
      .option('n', {alias: 'className', demandOption: true, desc: 'name of class'})

    baseCommand += ` -n ${yargs.argv.n} -d force-app/main/default/class`;

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
    handler: classCreateHandler
};
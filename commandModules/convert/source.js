/**
 * @description Converts source in a Salesforce DX project into metadata that you can deploy using Metadata API.
 * @method convertSourceHandler
 * @param {array} argv 
 */
function convertSourceHandler(argv) {
    let baseCommand = 'sfdx force:source:convert';
    const yargs = require('yargs')
        .option('r', {alias: 'rootdir', demandOption: true, desc: 'DIRECTORY: The directory that contains the Salesforce DX–formatted source to convert.'})
        .option('d', {alias: 'outputdir', demandOption: true, desc: 'DIRECTORY: The output directory to export the Metadata API–formatted metadata to.'})
        .option('n', {alias: 'packagename', demandOption: false, desc: 'STRING: The name of the package to associate with the Metadata API–formatted metadata.'}) 
        .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
        .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})


    const options = yargs.getOptions().alias;

    Object.keys(options).map(opt => {
        if (yargs.argv[opt] === true) {
            baseCommand += ` --${options[opt]}`;
        } else if (yargs.argv[opt] != null && typeof yargs.argv[opt] != 'boolean') {
            baseCommand += ` --${options[opt]} ${yargs.argv[opt]}`;
        }
    })

    console.log("RUNNING COMMAND: ", baseCommand);

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
    handler: convertSourceHandler
};
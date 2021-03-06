/**
 * @description logic to determine what we are going to import
 * @method importHandler
 * @param {object} argv 
 */
function importHandler(argv) {
    // all required open modules
    let importThing = require('./import/dataTree.js');
    
    let whatToImpot = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToImpot.toUpperCase()) {
        case ('DATATREE'):
            importThing.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: importHandler,
    builder: _ => _
    .default('argv', require('../index.js'))
};
const { append } = require('../private/append');

/**
 *  Directly appends to file - NOTE THIS WILL BE REMOVED IN THE FUTURE 
 *  @param {String} code The code to append
 *  @param {String} fileType The file type to append to
 */

function dirAppend(fileType, code) {
    if (!code) throw new Error('Sweeper.js: No code given');
    if (!fileType) throw new Error('Sweeper.js: No file type given');

    append(code, fileType);
}

module.exports = {
    dirAppend
}
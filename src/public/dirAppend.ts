import { append } from '../private/append';

/**
 *  Directly appends to file - NOTE THIS WILL MOST LIKELY BE REMOVED IN THE FUTURE 
 *  @param {String} code The code to append
 *  @param {String} fileType The file type to append to
 */

function dirAppend(fileType: String, code: String) {
    console.error('Sweeper.js: dirAppend should no be relied on. As it will most likely be removed in the future');
    if (!code) throw new Error('Sweeper.js: No code given');
    if (!fileType) throw new Error('Sweeper.js: No file type given');

    append(code.toString(), fileType);
}

export {
    dirAppend
}
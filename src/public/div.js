const { append } = require('../private/append');


/**
 *  Creates a html div element
 *  @param {String} divClass The class of the div element
 *  @param {Content} content The content of the div element
 */

// TODO Make the code work

/*
function div(divClass, content) {
    if (!divClass) throw new Error('Sweeper.js: No class given');

    append(`<div class="${divClass}">${eval(content)}</div>`, 'html');
}
*/

module.exports = {
    div
}
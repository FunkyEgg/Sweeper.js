const { append } = require('../private/append');


/**
 *  Creates a html div element
 *  @param {String} divClass The class of the div element
 *  @param {Content} content The content of the div element
 */

/*
function div(divClass, content) {
    if (!divClass) throw new Error('Sweeper.js: No class given');

    append(`<div class="${divClass}">${content}</div>`, 'html');
}
*/

module.exports = {
    div
}
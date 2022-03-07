const {append} = require('../private/append');

/**
 *  Creates a new html tag element
 *  @param {String} h The HTML tag to be appended
 *  @param {String} id The id of the element
 *  @param {String} text The text to be appended
 */
function h(h, text, id) {
    // TODO - Add id to element

    if (!h) throw new Error('Sweeper.js: No HTML tag given');
    if (!text) throw new Error('Sweeper.js: No text given');

    append(`<h${h}>${text}</h${h}>`, 'html');
}

//TODO - dd more html functions

/**
 *  Ends the html document
 */
function endHtml() {
    append('</body>\n</html>', 'html');
}


module.exports = {
    h,
    endHtml
}
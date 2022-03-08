const {append} = require('../private/append');

/**
 *  Creates a new html tag element
 *  @param {String} h The HTML tag to be appended
 *  @param {String} [tagClass] The class of the element
 *  @param {String} text The text to be appended
 */
function h(h, text, tagClass) {
    if (!h) throw new Error('Sweeper.js: No HTML tag given');
    if (!text) throw new Error('Sweeper.js: No text given');

    if (tagClass) {
        append(`<h${h} class="${tagClass}">${text}</h>`, 'html');
    } else {
        append(`<h${h}>${text}</h>`, 'html');
    }
}



//TODO - Add more html functions

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
const {append} = require('../private/generation');

/**
 *  Creates a new html tag element
 *  @param {String} h The HTML tag to be appended
 *  @param {String} text The text to be appended
 */
function h(h, text) {
    append(`<h${h}>${text}</h${h}>\n`);
}


/**
 *  Ends the html document
 */
function endHtml() {
    append('</body>\n</html>')
}


module.exports = {
    h,
    endHtml
}
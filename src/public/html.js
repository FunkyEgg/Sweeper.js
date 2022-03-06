const {append} = require('../private/append');

/**
 *  Creates a new html tag element
 *  @param {String} h The HTML tag to be appended
 *  @param {String} text The text to be appended
 */
function h(h, text) {
    if (!h) throw new Error('Sweepjs: No HTML tag given');
    if (!text) throw new Error('Sweepjs: No text given');

    append(`<h${h}>${text}</h${h}>\n`);
}

//TODO add more html functions

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
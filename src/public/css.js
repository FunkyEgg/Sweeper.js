const {append} = require('../private/append');

// TODO - Add more css functions

/**
 *  Colors the given id the given color
 *  @param {String} id The id of the element to be colored
 *  @param {String} color The color to be applied
*/
function color(id, color) {
    if (!id) throw new Error('Sweeper.js: No id given');
    if (!color) throw new Error('Sweeper.js: No color given');

    append(`#${id} {
        color: ${color};
    }`, 'css');
}

module.exports = {
    color
}
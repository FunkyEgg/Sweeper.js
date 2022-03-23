import {append} from '../private/append';

// TODO - Add more css functions

/**
 *  Colors the given id/class the given color
 *  @param {String} [tagClass] The class of the element to be colored
 *  @param {String} color The color to be applied
*/
function color(color: String, tagClass: String) {
    if (!color) throw new Error('Sweeper.js: No color given');

    if (tagClass) {
        append(`.${tagClass} { color: ${color}; }`, 'css');
    } else throw new Error('Sweeper.js: No class given');
}

export {
    color
}
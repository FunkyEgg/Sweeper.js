import {append} from './append';

// TODO - Add more css functions

function Color(color: String, tagClass: String) {
    if (!color) throw new Error('Sweeper.js: No color given');

    if (tagClass) {
        append(`.${tagClass} { color: ${color}; }`, 'css');
    } else throw new Error('Sweeper.js: No class given');
}

export {
    Color
}
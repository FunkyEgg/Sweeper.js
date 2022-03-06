const {append} = require('../private/generation');

function h1(text) {
    append(`<h1>${text}</h1>`);
}

module.exports = {
    h1
}
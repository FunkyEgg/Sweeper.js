const fs = require('fs');

const append = (input, ftype) => {
    if (ftype == 'html') {
    fs.appendFileSync('./sweeper.js/index.html', `${input}\n`);
    } else if (ftype == 'css') {
    fs.appendFileSync('./sweeper.js/styles.css', `${input}\n`);
    }
}

module.exports = {
    append
}
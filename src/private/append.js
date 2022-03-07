const fs = require('fs');

const append = (input, ftype) => {
    if (ftype == 'html') {
    fs.appendFileSync('./sweeperjs/index.html', `${input}\n`);
    } else if (ftype == 'css') {
    fs.appendFileSync('./sweeperjs/styles.css', `${input}\n`);
    }
}

module.exports = {
    append
}
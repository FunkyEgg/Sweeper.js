const fs = require('fs');

// append a given input to a html file
const append = (input) => {
    fs.appendFileSync('./sweeperjs/index.html', input);
}

module.exports = {
    append
}
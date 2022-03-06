const fs = require('fs');

// append a given input to a html file
const append = (input) => {
    fs.appendFileSync('./sweepjs/index.html', input);
}

module.exports = {
    append
}
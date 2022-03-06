const fs = require('fs');

function initSweep() {
    fs.mkdirSync('./sweepjs');
}

module.exports = {
    initSweep
}
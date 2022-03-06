const fs = require('fs');

/**
 *  Initializes the html file
 *  @param {String} title The title of the website
 */
function init(title) {
    if (!title) { 
        console.error('Sweepjs: No title given, defaulting to "Sweepjs"');
        title = 'Sweepjs';
    }

    const initText = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
    `;

    if (!fs.existsSync('./sweepjs')) {
        fs.mkdirSync('./sweepjs');
    }

    fs.writeFileSync('./sweepjs/index.html', initText);
}

module.exports = {
    init
}
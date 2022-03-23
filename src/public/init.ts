import fs from 'fs';

function init(title: String) {
    if (!title) { 
        console.warn('Sweeper.js: No title given, defaulting to "Sweeper.js"');
        title = 'Sweeper.js';
    }

    const htmlInitText = `<!-- Generated by Sweeper.js -->
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="styles.css">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
</head>
<body>\n`;

    if (!fs.existsSync('./sweeper.js')) {
        fs.mkdirSync('./sweeper.js');
    }

    fs.writeFileSync('./sweeper.js/index.html', htmlInitText);
    fs.writeFileSync('./sweeper.js/styles.css', '/* Generated by Sweeper.js */\n');
    fs.writeFileSync('./sweeper.js/script.js', '/* Generated by Sweeper.js */\n');
}

/**
 *  Initalizes the website
 */
// TODO Finish the creation of the website class
class Website {
    /**
     *  Initalizes the website
     *  @param title The title for the website
     */
    constructor(title: String) {
        init(title);
    }
}

export {
    init
}
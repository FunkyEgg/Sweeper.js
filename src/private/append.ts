import fs from 'fs';

export const append = (input: String, ftype: String) => {
    if (ftype == 'html') {
    fs.appendFileSync('./sweeper.js/index.html', `${input}\n`);
    } else if (ftype == 'css') {
    fs.appendFileSync('./sweeper.js/styles.css', `${input}\n`);
    }
}
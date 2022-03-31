import { append } from './append';
function H(h: Number, text: String, tagClass: String) {
    if (!h) throw new Error('Sweeper.js: No HTML tag given');
    if (!text) throw new Error('Sweeper.js: No text given');

    if (tagClass) {
        append(`<h${h} class="${tagClass}">${text}</h>`, 'html');
    } else {
        append(`<h${h}>${text}</h>`, 'html');
    }
}

function P(text: String) {
    if (!text) throw new Error("Sweeper.js: No text given");
    append(`<p>${text}</p>`, 'html');
}

//TODO - Add more html functions

function EndHtml() {
    append('</body>\n</html>', 'html');
}

export {
    H,
    EndHtml,
    P
}
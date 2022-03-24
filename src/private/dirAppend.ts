import { append } from './append';

function DirAppend(fileType: String, code: String) {
    console.error('Sweeper.js: dirAppend should no be relied on. As it will most likely be removed in the future');
    if (!code) throw new Error('Sweeper.js: No code given');
    if (!fileType) throw new Error('Sweeper.js: No file type given');

    append(code.toString(), fileType);
}

export {
    DirAppend
}
const { initSweep } = require('./private/init');
const { h, endHtml } = require('./public/html');

initSweep();

module.exports = {
    h,
    endHtml
}
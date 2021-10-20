'use strict';

function debounce(callback, delay = 100) {
    let timeoutID;
    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

module.exports = debounce;
//# sourceMappingURL=debounce.cjs.js.map

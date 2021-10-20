var debounce = (function () {
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

    return debounce;

})();
//# sourceMappingURL=debounce.iife.js.map

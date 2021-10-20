(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.debounce = factory());
})(this, (function () { 'use strict';

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

}));
//# sourceMappingURL=debounce.umd.js.map

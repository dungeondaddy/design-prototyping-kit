module.exports = {
    init: () => {
        /*
            detect focus source using a11y.js
        */
        (() => {
            /* global ally */
            console.log("loaded version", ally.version, "of a11y.js");
            const focusSource = ally.style.focusSource(); // eslint-disable-line no-unused-vars
        })();
    },
};

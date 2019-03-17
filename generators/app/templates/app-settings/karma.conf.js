module.exports = function(config) {
    'use strict';

    config.set({
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['ui5'],

        ui5: {
            url: 'https://openui5.hana.ondemand.com',
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // level of browser logging
        browserConsoleLogOptions: {
            level: 'error',
        },
    });
};

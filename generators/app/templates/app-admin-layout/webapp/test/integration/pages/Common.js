sap.ui.define(['sap/ui/test/Opa5'], function(Opa5) {
    'use strict';

    return Opa5.extend('<%= projectNamespace %>.test.integration.pages.Common', {
        iStartTheApp: function() {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: '<%= projectNamespace %>',
                    async: true,
                },
            });
        },

        iTeardownTheApp: function() {
            this.iTeardownMyUIComponent();
        },
    });
});

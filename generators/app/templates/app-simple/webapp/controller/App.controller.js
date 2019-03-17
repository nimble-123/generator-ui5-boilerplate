sap.ui.define(['<%= projectNamespaceAMD %>/controller/BaseController', 'sap/m/MessageToast'], function(
    BaseController,
    MessageToast
) {
    'use strict';

    return BaseController.extend('<%= projectNamespace %>.controller.App', {
        /*
     * Lifecycle Methods
    */

        /**
         * Lifecycle method onInit
         * @public
         */
        onInit: function() {},

        /**
         * Lifecycle method onBeforeRendering
         * @public
         */
        onBeforeRendering: function() {},

        /**
         * Lifecycle method onAfterRendering
         * @public
         */
        onAfterRendering: function() {},

        /**
         * Lifecycle method onExit
         * @public
         */
        onExit: function() {},

        /*
     * Event Handler
    */

        /*
     * TODO
     */
        handleButtonPress: function(oEvent) {
            var oInput = this.getView().byId('input');
            var sString = 'Hello World!';
            oInput.setValue(sString);

            MessageToast.show('Success!');
        },
    });
});

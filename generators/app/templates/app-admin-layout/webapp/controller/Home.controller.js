sap.ui.define(
    [
        '<%= projectNamespaceAMD %>/controller/BaseController',
        'sap/ui/model/json/JSONModel',
        'sap/ui/Device',
        '<%= projectNamespaceAMD %>/model/formatter',
    ],
    function(BaseController, JSONModel, Device, formatter) {
        'use strict';
        return BaseController.extend('<%= projectNamespace %>.controller.Home', {
            formatter: formatter,

            onInit: function() {
                var oViewModel = new JSONModel({
                    isPhone: Device.system.phone,
                });
                this.setModel(oViewModel, 'view');
                Device.media.attachHandler(
                    function(oDevice) {
                        this.getModel('view').setProperty('/isPhone', oDevice.name === 'Phone');
                    }.bind(this)
                );
            },
        });
    }
);

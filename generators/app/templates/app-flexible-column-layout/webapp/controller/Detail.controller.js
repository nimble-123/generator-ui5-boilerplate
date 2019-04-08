sap.ui.define(
    ['<%= projectNamespaceAMD %>/controller/BaseController', 'sap/m/MessageToast'],
    function(BaseController, MessageToast) {
        'use strict';

        return BaseController.extend('<%= projectNamespace %>.controller.Detail', {
            onInit: function() {
                var route = this.getOwnerComponent()
                    .getRouter()
                    .getRoute('RouteMasterDetail');
                route.attachPatternMatched(this.onPatternMatched, this);
            },

            onPatternMatched: function(event) {
                var model = this.getOwnerComponent().getModel('odata');
                var itemId = event.getParameter('arguments');
                model.metadataLoaded().then(this.onMetadataLoaded.bind(this, model, itemId));
            },

            onMetadataLoaded: function(model, carrid) {
                var key = model.createKey('CarrierCollection', {
                    carrid: carrid.itemId,
                });
                this.getView().bindElement({
                    path: 'odata>/' + key,
                    parameters: {
                        expand: 'carrierFlights',
                    },
                });
            },

            onAddBtnPress: function() {
                this.byId('dialog').open();
            },

            // DIALOG ------------------------------------------------------------

            onBeforeDialogOpen: function(event) {
                var context = this.getView().getBindingContext('odata');
                this.setDeferred('addingFlight', context.getModel());
                this._createdContext = context.getModel().createEntry('/FlightCollection', {
                    properties: {
                        carrid: context.getProperty('carrid'),
                    },
                    groupId: 'addingFlight',
                });
                event.getSource().setBindingContext(this._createdContext, 'odata');
            },

            setDeferred: function(groupId, model) {
                var groupsIds = model.getDeferredGroups();
                if (groupsIds.filter(id => id === groupId).length === 0) {
                    model.setDeferredGroups(model.getDeferredGroups().concat(groupId));
                }
            },

            onDialogAddPress: function() {
                var inputs = this.byId('dialog')
                    .getControlsByFieldGroupId('inputs')
                    .filter(control => control instanceof sap.m.InputBase);
                var invalidInput = inputs.find(hasValueStateError.bind(this));
                if (invalidInput) {
                    invalidInput.focus();
                } else {
                    this.getView()
                        .getModel('odata')
                        .submitChanges({
                            groupId: 'addingFlight',
                            success: this.onCreateSuccess.bind(
                                this,
                                this._createdContext.getProperty('connid')
                            ),
                        });
                    this.byId('dialog').close();
                }

                function hasValueStateError(input) {
                    return input.getValueState() === 'Error';
                }
            },

            onDialogCancelPress: function() {
                this.byId('dialog').close();
            },

            onAfterDialogClose: function(event) {
                event.getSource().unbindElement('odata');
                this._createdContext = null;
                delete this._createdContext;
            },

            onCreateSuccess: function(connid) {
                MessageToast.show(`Flight ${connid} Added`);
            },

            onItemPress: function(event) {
                var context = event.getSource().getBindingContext('odata');
                var sItemId = context.getProperty('carrid');
                var sNavigationId = context.getProperty('connid');
                this.getOwnerComponent()
                    .getRouter()
                    .navTo('RouteMasterDetailSubDetail', {
                        itemId: sItemId,
                        navigationId: sNavigationId,
                    });
            },
        });
    }
);

sap.ui.require(
    [
        'sap/ui/test/Opa5',
        '<%= projectNamespaceAMD %>/test/integration/pages/Common',
        'sap/ui/test/matchers/PropertyStrictEquals',
        'sap/ui/test/actions/Press',
    ],
    function(Opa5, Common, PropertyStrictEquals, Press) {
        'use strict';

        //var sInputId = "input";
        //var sButtonId = "button";
        var sViewName = '<%= projectNamespace %>.view.App';

        Opa5.createPageObjects({
            viewName: sViewName,
            onTheAppPage: {
                baseClass: Common,
                actions: {
                    iSeeTheGivenTextOfTheInputField: function() {
                        return this.waitFor({
                            controlType: 'sap.m.Input',
                            // id: sInputId,
                            viewName: sViewName,
                            check: function(aControl) {
                                return aControl.filter(function(oControl) {
                                    if (oControl.getId() !== 'input') {
                                        return false;
                                    }
                                    return true;
                                });
                            },
                            matchers: [
                                new PropertyStrictEquals({
                                    name: 'value',
                                    value: 'Here comes the text...',
                                }),
                            ],
                            success: function() {
                                Opa5.assert.ok(true, "The text 'Here comes the text...' is shown in the input field");
                            },
                            errorMessage: "The text 'Here comes the text...' could not be found",
                        });
                    },
                    iPressTheButton: function() {
                        return this.waitFor({
                            controlType: 'sap.m.Button',
                            // id: sInputId,
                            viewName: sViewName,
                            actions: [new Press()],
                            success: function() {
                                Opa5.assert.ok(true, 'The Button is pressed');
                            },
                            errorMessage: 'Button is not pressed',
                        });
                    },
                },
                assertions: {
                    iSeeTheExpectedTextOfTheInputField: function() {
                        return this.waitFor({
                            controlType: 'sap.m.Input',
                            // id: sInputId,
                            viewName: sViewName,
                            matchers: new PropertyStrictEquals({
                                name: 'value',
                                value: 'Hello World!',
                            }),
                            success: function() {
                                Opa5.assert.ok(true, "The text in the inputfield is changed to 'Hello World!'");
                            },
                            errorMessage: "The text in the inputfield is not changed to 'Hello World!",
                        });
                    },
                    iSeeTheMessageToast: function() {
                        return this.waitFor({
                            viewName: sViewName,
                            autoWait: false /* explicitly turned off for MessageToast */,
                            pollingInterval: 100,
                            check: function() {
                                // Locate the message toast using its class name in a jQuery function
                                return $('.sapMMessageToast').length > 0;
                                // return !!sap.ui.test.Opa5.getJQuery()(".sapMMessageToast").length;
                            },
                            success: function() {
                                Opa5.assert.ok(true, 'MessageToast is shown');
                            },
                            errorMessage: 'No Toast message detected!',
                        });
                    },
                },
            },
        });
    }
);

/*global QUnit*/

jQuery.sap.require('sap.ui.qunit.qunit-css');
jQuery.sap.require('sap.ui.thirdparty.qunit');
jQuery.sap.require('sap.ui.qunit.qunit-junit');
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Supplier

sap.ui.require(
    [
        'sap/ui/test/Opa5',
        '<%= projectNamespaceAMD %>/test/integration/pages/Common',
        'sap/ui/test/opaQunit',
        '<%= projectNamespaceAMD %>/test/integration/pages/App',
        '<%= projectNamespaceAMD %>/test/integration/pages/Browser',
        '<%= projectNamespaceAMD %>/test/integration/pages/Master',
        '<%= projectNamespaceAMD %>/test/integration/pages/Detail',
        '<%= projectNamespaceAMD %>/test/integration/pages/NotFound',
    ],
    function(Opa5, Common) {
        'use strict';
        Opa5.extendConfig({
            arrangements: new Common(),
            viewNamespace: '<%= projectNamespace %>.view.',
        });

        sap.ui.require(
            [
                '<%= projectNamespaceAMD %>/test/integration/MasterJourney',
                '<%= projectNamespaceAMD %>/test/integration/NavigationJourney',
                '<%= projectNamespaceAMD %>/test/integration/NotFoundJourney',
                '<%= projectNamespaceAMD %>/test/integration/BusyJourney',
                '<%= projectNamespaceAMD %>/test/integration/FLPIntegrationJourney',
            ],
            function() {
                QUnit.start();
            }
        );
    }
);

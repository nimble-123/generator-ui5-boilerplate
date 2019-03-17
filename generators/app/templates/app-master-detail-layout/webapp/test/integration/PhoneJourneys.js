/*global QUnit*/

jQuery.sap.require('sap.ui.qunit.qunit-css');
jQuery.sap.require('sap.ui.thirdparty.qunit');
jQuery.sap.require('sap.ui.qunit.qunit-junit');
QUnit.config.autostart = false;

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
                '<%= projectNamespaceAMD %>/test/integration/NavigationJourneyPhone',
                '<%= projectNamespaceAMD %>/test/integration/NotFoundJourneyPhone',
                '<%= projectNamespaceAMD %>/test/integration/BusyJourneyPhone',
            ],
            function() {
                QUnit.start();
            }
        );
    }
);

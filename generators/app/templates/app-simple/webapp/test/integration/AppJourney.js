sap.ui.define(['sap/ui/test/opaQunit', '<%= projectNamespaceAMD %>/test/integration/pages/App'], function(opaTest) {
    'use strict';

    QUnit.module('AppView Feature');

    opaTest('should change the input value', function(Given, When, Then) {
        // Arrangements
        Given.iStartTheApp();

        // Actions
        When.onTheAppPage.iSeeTheGivenTextOfTheInputField();
        When.onTheAppPage.iPressTheButton();

        // Assertions
        Then.onTheAppPage.iSeeTheExpectedTextOfTheInputField();
        Then.onTheAppPage.iSeeTheMessageToast();
        Then.onTheAppPage.iTeardownTheApp();
    });
});

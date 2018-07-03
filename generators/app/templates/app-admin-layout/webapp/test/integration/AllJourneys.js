/* global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"<%= projectNamespaceAMD %>/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"<%= projectNamespaceAMD %>/test/integration/pages/App",
	"<%= projectNamespaceAMD %>/test/integration/pages/Settings",
	"<%= projectNamespaceAMD %>/test/integration/pages/Statistics",
	"<%= projectNamespaceAMD %>/test/integration/pages/Home"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "<%= projectNamespace %>.view."
	});

	sap.ui.require([
		"<%= projectNamespaceAMD %>/test/integration/NavigationJourney"
	], function() {
		QUnit.start();
	});
});
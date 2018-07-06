sap.ui.define([
	"sap/ui/test/Opa5",
  "<%= projectNamespaceAMD %>/test/integration/pages/Common",
  "<%= projectNamespaceAMD %>/test/integration/AppJourney"
], function(Opa5, Common) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Common(),
		pollingInterval: 100,
		timeout: 15,
		autoWait: true
	});

});

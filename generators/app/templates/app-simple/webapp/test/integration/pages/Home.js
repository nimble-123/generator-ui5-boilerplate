sap.ui.require([
	"sap/ui/test/Opa5",
	"<%= projectNamespaceAMD %>/test/integration/pages/Common",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/actions/Press"
], function (Opa5, Common, AggregationLengthEquals, PropertyStrictEquals, Properties, EnterText, Press) {
	"use strict";

	//var sViewName = "<%= projectNamespace %>.view.Home";

	Opa5.createPageObjects({
		onTheAppPage: {

			baseClass: Common,

			actions: {

			},

			assertions: {

			}

		}
	});

});

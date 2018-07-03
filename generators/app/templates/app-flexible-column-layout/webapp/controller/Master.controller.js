sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("<%= projectNamespace %>.controller.Master", {
		onInit: function() {

		},

		onItemPress: function(event) {
			var context = event.getParameter("listItem").getBindingContext("odata");
			this.getOwnerComponent().getRouter().navTo("masterDetail", {
				itemId: context.getProperty("carrid")
			});
		}

	});
});

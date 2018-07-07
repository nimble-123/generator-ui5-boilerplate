sap.ui.define([
	"<%= projectNamespaceAMD %>/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("<%= projectNamespace %>.controller.Master", {
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

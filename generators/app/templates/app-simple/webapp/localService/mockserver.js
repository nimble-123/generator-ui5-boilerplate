sap.ui.define([
	"sap/ui/core/util/MockServer",
], MockServer => ({
	init: () => {
		MockServer.config({
			autoRespond: true,
			autoRespondAfter: 0,
		});
		const mockServer = new MockServer({
			rootUri: "/",
			recordRequests: false,
		});
		const pathPrefix = jQuery.sap.getModulePath("<%= projectNamespaceAMD %>/localService");
		mockServer.simulate(pathPrefix + "/metadata.xml", {
			sMockdataBaseUrl: pathPrefix + "/mockdata",
			aEntitySetsNames: [
				"CarrierCollection",
				"FlightCollection",
			],
		});
		mockServer.start();
	}
}));
this["sap-ui-config"] = {
	onInit: () => sap.ui.require([
		"<%= projectNamespaceAMD %>/localService/mockserver",
		"sap/ui/core/ComponentContainer",
		"sap/ui/model/odata/v2/ODataModel",
	], (mockserver, Container) => mockserver.init() || sap.ui.component({
		async: true,
		manifestUrl: "manifest.json",
	}).then(component => new Container({
		component
	}).placeAt("content"))),

	preload: "async",
	theme: "sap_belize",
	compatVersion: "edge",
	resourceRoots: {
		"<%= projectNamespace %>": "./"
	},
	"xx-componentPreload": "off",
	"xx-waitForTheme": true
};
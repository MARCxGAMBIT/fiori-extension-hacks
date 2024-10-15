jQuery.sap.declare("customer.fin.gl.glview.display.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "fin.gl.glview.display",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/FIN_GL_LITB_GLV"

	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});

fin.gl.glview.display.Component.extend("customer.fin.gl.glview.display.Component", {
	metadata: {
		manifest: "json"
	},

	init: function () {
		// Bevor irgendwas anderes passiert, das Model, dass in der Originalapp in der manifest.json definiert ist, überschreiben
		// Parameter wurden aus der Originalapp übernommen, annotationURI wurde um lokalen Pfad erweitert
		this.setModel(new sap.ui.model.odata.v2.ODataModel(
			{
				metadataUrlParams: {
					"countSupported": false,
					"defaultCountMode": "Inline",
					"sap-documentation": "heading,quickinfo",
					"sap-value-list": "none"
				},
				annotationURI: [
					"/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Annotations(TechnicalName='FAC_GLV_GL_ACCOUNT_LINE_ANNO_MDL',Version='0001')/$value",
					"annotations/annotation.xml"
				],
				serviceUrl: "/sap/opu/odata/sap/FAC_GLV_GL_ACCOUNT_LINE_ITEMS_SRV"
			}
		));
		// Init Funktion der Originalapp aufrufen
		fin.gl.glview.display.Component.prototype.init.apply(this, arguments);
	}
});

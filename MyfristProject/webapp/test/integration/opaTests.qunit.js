/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Droid_Consulting/MyfristProject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
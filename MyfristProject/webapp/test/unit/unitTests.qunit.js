/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Droid_Consulting/MyfristProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
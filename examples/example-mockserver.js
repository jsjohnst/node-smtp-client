/*===============================================
	File:      example-mockserver.js
	
	Author:    Micheil Smith
	Description:
		Example of a mock server
===============================================*/
var sys = require("sys");
var mockServer = require("../mock/server").Server;

var server = mockServer(3125, "localhost");
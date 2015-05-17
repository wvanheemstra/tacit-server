/*
* TACIT SERVER - The Tacit Server
*
* USAGE - can be required like so:
* var tacitServer = require('tacit-server');
*
* var server = tacitServer.server;
* //do something with server
*/
var TacitServer = []; // placeholder object

var express = require('express');

/*
* SERVER - The Server used for shutdown etc
* See: https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/
*/
var server = TacitServer.server = express();

module.exports = new TacitServer();

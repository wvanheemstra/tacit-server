/*
* TACIT SERVER - The Tacit Server
*
* USAGE - can be required like so:
* var tacitServer = require('tacit-server');
*
* var server = tacitServer.server;
* //do something with server
*/

// See also http://www.sitepoint.com/understanding-module-exports-exports-node-js/

var exports = module.exports = {}; // placeholder object

var express = require('express'),
path = require('path'),
mime = require('mime'),
fs = require('fs'),
url = require('url'),
http = require('http'),
cors = require('cors'),
runner = require('child_process'),
morgan = require('morgan'),
partials = require('express-partials'),
device = require('./lib/device.js'),
hash = require('./lib/pass.js').hash,
redirect = require('express-redirect'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
i18n = require('i18n-2'),
methodOverride = require('method-override'),
errorHandler = require('errorhandler'),
sass = require('node-sass'),
sassMiddleware = require('node-sass-middleware'),
session = require('express-session'),
passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
FacebookStrategy = require('passport-facebook').Strategy;
/*
* SERVER - The Server used for shutdown etc
* See: https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/
*/
var server = exports.server = express();
/*
* CONFIGS - The Configurations
*/
var config = {};
server.setConfig = function(config) {
  this.config = config;
}
server.getConfig = function() {
  return this.config;
}

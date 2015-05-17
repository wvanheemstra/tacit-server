var should = require('chai').should(),
    tacitServer = require('../index'),
    testFunction = tacitServer.testFunction,
    server = tacitServer.server;

describe('#testFunction', function() {
  it('testFunction', function() {
    testFunction('Hello World!').should.equal('Hello World!');
  });
});

describe('#server', function() {
  it('server', function() {
    server().should.equal(server); // return express server
  });
});

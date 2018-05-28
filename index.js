const Alexa = require('alexa-sdk');
exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_APPLICATION_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'Unhandled': function () {
    this.emit(':tell', 'はじめまして')
  }
}
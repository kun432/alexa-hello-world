const Alexa = require('alexa-sdk');
exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_APPLICATION_ID;
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const languageStrings = {
  'ja-JP': {
    'translation': {
      'HELLO': 'はじめまして',
      'BYE': 'さようなら'
    }
  },
  'en-US': {
    'translation': {
      'HELLO': 'Hello',
      'BYE': 'bye'
    }
  }
};

var handlers = {
  'Unhandled': function () {
    this.emit(':tell', this.t('HELLO'));
  }
};
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
      'BYE': 'さようなら',
      'ORDER': 'コーヒーですね、承知しました'
    }
  },
  'en-US': {
    'translation': {
      'HELLO': 'Hello',
      'BYE': 'bye',
      'ORDER': 'wanna have coffee, OK'
    }
  }
};

var handlers = {
  'Unhandled': function () {
    this.emit(':tell', this.t('HELLO'));
  },
  'orderIntent': function () {
    this.emit(':tell', this.t('ORDER'));
  }
};
const Alexa = require('alexa-sdk');
exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_APPLICATION_ID;
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers,nextHandlers);
  alexa.execute();
};

const languageStrings = {
  'ja-JP': {
    'translation': {
      'HELLO': 'はじめまして、注文をどうぞ',
      'REHELLO': '注文をどうぞ',
      'BYE': 'さようなら',
      'ORDER': 'コーヒーですね、承知しました'
    }
  },
  'en-US': {
    'translation': {
      'HELLO': 'Hello, what would you like to drink?',
      'REHELLO': 'what would you like to drink?',
      'BYE': 'bye',
      'ORDER': 'wanna have coffee, OK'
    }
  }
};

var handlers = {
  'Unhandled': function () {
    this.handler.state = '_NEXT';
    this.emit(':ask', this.t('HELLO'), this.t('REHELLO'));
  }
};
var nextHandlers = Alexa.CreateStateHandler('_NEXT', {
  'Unhandled': function () {
    this.emit(':tell', this.t('BYE'));
  },
  'orderIntent': function () {
    this.emit(':tell', this.t('ORDER'));
  }
});
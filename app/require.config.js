require.config({
  baseUrl: './scripts',
  shim: {
    'backbone': [
      'jquery',
      'underscore'
    ],
    'backbone.super': [
      'backbone'
    ],
    'backbone.wreqr': [
      'backbone'
    ],
    'backbone.babysitter': [
      'backbone'
    ],
    'backbone.marionette': [
      'backbone'
    ],
    'hbs': [
      'handlebars'
    ],
    'application': [
      'backbone.super'
    ],
  },
  paths: {
    'jquery'              : '../bower_components/jquery/dist/jquery.min',
    'underscore'          : '../bower_components/underscore/underscore',
    'handlebars'          : '../bower_components/handlebars/handlebars.min',
    'backbone'            : '../bower_components/backbone/backbone',
    'backbone.super'      : '../bower_components/backbone-super/backbone-super/backbone-super-min',
    'backbone.wreqr'      : '../bower_components/backbone.wreqr/lib/backbone.wreqr.min',
    'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/backbone.babysitter.min',
    'backbone.marionette' : '../bower_components/backbone.marionette/lib/core/backbone.marionette.min',
    'hbs'                 : '../bower_components/requirejs-hbs/hbs',
    'text'                : '../bower_components/requirejs-text/text',
    // 'bluebird': '../bower_components/bluebird/js/browser/bluebird',
    // 'template_helpers/helper': './template_helpers/helper'

    'application' : './application',

    // テンプレートは scripts/ 以下じゃないのでここでショートカットを定義しておく必要がある。
    'tmpls'   : '../templates',
    'configs' : '../configs',
    'config'  : '../configs/config',
  }
});

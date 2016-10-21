define([
  'views/base_view',
  'hbs!tmpls/error',
], function(
  BaseView,
  ErrorTmpl
) {
  'use strict';

  var ErrorView = BaseView.extend({

    template : ErrorTmpl,

  });

  return ErrorView;
});

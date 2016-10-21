define([
  'view_models/base_view_model'
], function(
  BaseViewModel
) {
  'use strict';

  var ErrorViewModel = BaseViewModel.extend({

    defaults: function()
    {
      return {
      };
    },

    initialize: function(options)
    {
      this._super();
    },

  });

  return ErrorViewModel;
});

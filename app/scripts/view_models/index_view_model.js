define([
  'view_models/base_view_model'
], function(
  BaseViewModel
) {

  'use strict';


  /**
   * トップページのViewModel
   *
   * @class   IndexViewModel
   * @module  ViewModel
   * @extends BaseViewModel
   */
  var IndexViewModel = BaseViewModel.extend({

    defaults: function()
    {
      return {
        'userAgent' : '',
      };
    },

    initialize: function()
    {
      this._super();

      this.set({
        'userAgent' : navigator.userAgent
      });
    },

  });

  return IndexViewModel;
});

define([
  'backbone.marionette'
], function(
  Marionette
) {

  'use strict';


  /**
   * 全てのViewModelはこのクラスを継承する。
   *
   * @class   BaseViewModel
   * @module  ViewModel
   * @extends BaseViewModel
   */
  var BaseViewModel = Marionette.Model.extend({

    initialize: function()
    {
      console.log('base view model');
    },

  });

  return BaseViewModel;
});

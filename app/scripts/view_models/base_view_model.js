define([
  'backbone'
], function(
  Backbone
) {

  'use strict';


  /**
   * 全てのViewModelはこのクラスを継承する。
   *
   * @class   BaseViewModel
   * @module  ViewModel
   * @extends Marionette.Model
   */
  var BaseViewModel = Backbone.Model.extend({

    initialize: function()
    {
      this._super();
    },

  });

  return BaseViewModel;
});

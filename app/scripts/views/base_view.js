define([
  'backbone.marionette',
  'hbs!tmpls/index'
], function(
  Marionette,
  IndexTmpl
) {

  'use strict';


  /**
   * 全てのViewはこのクラスを継承する
   *
   * @class   BaseView
   * @module  View
   * @extends Marionette.ItemView
   */
  var BaseView = Marionette.ItemView.extend({

    initialize: function()
    {
      console.log('base view');
    },

  });

  return BaseView;
});

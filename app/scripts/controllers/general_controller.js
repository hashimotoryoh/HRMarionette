define([
  'backbone.marionette',
  'views/contents_layout_view',

  'views/index_view',
  'view_models/index_view_model',
], function(
  Marionette,
  ContentsLayoutView,

  IndexView,
  IndexViewModel
) {

  'use strict';


  var GeneralController = Marionette.Controller.extend({

    initialize: function()
    {
      this.contentsLayout = new ContentsLayoutView();
      this.contentsLayout.render();
    },


    /**
     * ここから
     * Routerで各ルートに対して割り当てたメソッドたち
     */
    index: function()
    {
      var view = new IndexView({
        model : new IndexViewModel()
      });
      this.contentsLayout.main.show(view);
    },
    /**
     * ここまで
     * Routerで各ルートに対して割り当てたメソッドたち
     */

  });

  return GeneralController;
});

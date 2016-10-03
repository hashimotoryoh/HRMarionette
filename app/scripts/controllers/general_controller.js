define([
  'backbone.marionette',
  'views/contents_layout_view',
], function(
  Marionette,
  ContentsLayoutView
) {

  'use strict';


  var GeneralController = Marionette.Controller.extend({

    initialize: function()
    {
      this.contentsLayout = new ContentsLayoutView();
      this.contentsLayout.render();
    },


  });

  return GeneralController;
});

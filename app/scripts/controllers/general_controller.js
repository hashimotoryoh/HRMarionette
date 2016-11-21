define([
  'backbone.marionette',
  'views/header_layout_view',
  'views/contents_layout_view',

  'views/index_view',
  'view_models/index_view_model',
  'views/error_view',
  'view_models/error_view_model',
  'views/workspace_view',
  'view_models/workspace_view_model',
], function(
  Marionette,
  HeaderLayoutView,
  ContentsLayoutView,

  IndexView,
  IndexViewModel,
  ErrorView,
  ErrorViewModel,
  WorkspaceView,
  WorkspaceViewModel
) {
  'use strict';


  var GeneralController = Marionette.Controller.extend({

    headerLayout   : null,
    contentsLayout : null,


    initialize: function()
    {
      this.headerLayout = new HeaderLayoutView();
      this.headerLayout.render();

      this.contentsLayout = new ContentsLayoutView();
      this.contentsLayout.render();
    },


    /**
     * ここから
     * Routerで各ルートに対して割り当てたメソッドたち
     */
    index: function()
    {
      var view = this._createView(IndexView, IndexViewModel);
      this.contentsLayout.main.show(view);
    },
    error: function()
    {
      var view = this._createView(ErrorView, ErrorViewModel);
      this.contentsLayout.main.show(view);
    },
    workspace: function()
    {
      var view = this._createView(WorkspaceView, WorkspaceViewModel);
      this.contentsLayout.main.show(view);
    },
    /**
     * ここまで
     * Routerで各ルートに対して割り当てたメソッドたち
     */


     /**
      * 引数なしでViewを生成するときのみ
      */
    _createView: function(view, viewModel)
    {
      return new view({
        model : new viewModel()
      });
    },

  });

  return GeneralController;
});

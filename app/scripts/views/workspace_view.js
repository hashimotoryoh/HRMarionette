define([
  'views/base_view',
  'hbs!tmpls/workspace'
], function(
  BaseView,
  WorkspaceTmpl
) {

  'use strict';


  /**
   * 作業広場のView
   *
   * @class   WorkspaceView
   * @module  View
   * @extends BaseView
   */
  var WorkspaceView = BaseView.extend({

    template: WorkspaceTmpl,

  });

  return WorkspaceView;
});

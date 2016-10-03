define([
  'views/base_view',
  'hbs!tmpls/workspace',
  'commander'
], function(
  BaseView,
  WorkspaceTmpl,
  Commander
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

    template : WorkspaceTmpl,

    ui: {
      transTestBtn : '#js-trans-test-btn',
    },

    events: {
      'click @ui.transTestBtn' : '_onClickTransTestBtn',
    },


    _onClickTransTestBtn: function()
    {
      console.log('clicked');

      Commander.command.execute('route', '');
    },

  });

  return WorkspaceView;
});

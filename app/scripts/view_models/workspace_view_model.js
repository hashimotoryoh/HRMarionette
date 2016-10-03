define([
  'view_models/base_view_model'
], function(
  BaseViewModel
) {

  'use strict';


  /**
   * 作業広場のViewModel
   *
   * @class   WorkspaceViewModel
   * @module  ViewModel
   * @extends BaseViewModel
   */
  var WorkspaceViewModel = BaseViewModel.extend({

    initialize: function()
    {
      this._super();

      console.log('This is workspace.');
    },

  });

  return WorkspaceViewModel;
});

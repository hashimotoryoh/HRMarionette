define([
  'view_models/base_view_model',
  'services/http_client_service'
], function(
  BaseViewModel,
  HttpClient
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

      var request = HttpClient.createRequestModel({
        type: 'GET',
        url : 'https://jsonplaceholder.typicode.com/posts',
      });

      console.log(request.get('type'));

      console.log('send');
      HttpClient.send(request).then(function(response) {
        console.log('response');
        // console.log(response);
      },
      function(err) {
        console.error(err);
      });
    },

  });

  return WorkspaceViewModel;
});

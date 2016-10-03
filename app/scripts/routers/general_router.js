define([
  'backbone.marionette'
], function(
  Marionette
) {

  'use strict';


  var GeneralRouter = Marionette.AppRouter.extend({

    initialize: function()
    {
    },

    appRoutes: {
      ''          : 'index',
      'workspace' : 'workspace',
    },

  });

  return GeneralRouter;
});

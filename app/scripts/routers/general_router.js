define([
  'backbone.marionette'
], function(
  Marionette
) {

  'use strict';


  var GeneralRouter = Marionette.AppRouter.extend({

    appRoutes: {
      ''          : 'index',
      'workspace' : 'workspace',
    },

  });

  return GeneralRouter;
});

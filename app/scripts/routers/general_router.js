define([
  'backbone.marionette'
], function(
  Marionette
) {

  'use strict';


  var GeneralRouter = Marionette.AppRouter.extend({

    // 全てのRouteに対して、実行するControllerのメソッドを定義する
    appRoutes: {
      ''          : 'index',
      'workspace' : 'workspace',
    },

  });

  return GeneralRouter;
});

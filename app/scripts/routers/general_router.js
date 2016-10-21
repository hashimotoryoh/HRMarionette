define([
  'backbone.marionette',
  'commander',
], function(
  Marionette,
  Commander
) {

  'use strict';


  var GeneralRouter = Marionette.AppRouter.extend({

    /**
     * @override
     */
    _addAppRoute: function(controller, route, methodName)
    {
      var method = controller[methodName];

      if (!method) {
        throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
      }

      /**
       * custom
       * 遷移の開始/終了をとる為に、_addAppRouteをoverrideしてる
       */
      var wrappedMethod = _.wrap(method, function(func) {
        Commander.mediator.trigger('before:route', {
          route      : route,
          methodName : methodName,
        });

        Array.prototype.shift.apply(arguments);
        func.apply(this, arguments);

        Commander.mediator.trigger('after:route',{
          route      : route,
          methodName : methodName,
        });
      }, this);
      /**
       * /custom
       */

      this.route(route, methodName, _.bind(wrappedMethod, controller));
    },


    // 全てのRouteに対して、実行するControllerのメソッドを定義する
    appRoutes: {
      ''          : 'index',
      'error'     : 'error',
      'workspace' : 'workspace',

      // 一番下に書かなきゃいけない
      '*notFound' : 'error',
    },

  });

  return GeneralRouter;
});

define([
  'routers/general_router',
  'controllers/general_controller'
], function (
  GeneralRouter,
  GeneralController
) {

  'use strict';


  var RouterFactory = function() {

    this._routes = {
      '/': function() {
        return new GeneralRouter({
          'controller': new GeneralController()
        });
      },
      '/index.html': function() {
        return new GeneralRouter({
          'controller': new GeneralController()
        });
      },
    };

    /**
     * パスに対するルーターを返す
     *
     * @method makeRouter
     * @params {String} path パス
     * @return {Marionette.AppRouter} ルーター
     */
    this.makeRouter = function(path)
    {
      var router = this._routes[path];

      if (!router)
        throw new Error('Router設定の存在しないページを読み込んでいます。: ' + path);

      return router();
    };

  };

  return new RouterFactory();
});

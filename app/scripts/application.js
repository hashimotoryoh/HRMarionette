define([
  'backbone',
  'backbone.marionette',
  'routers/router_factory',
  'commander'
], function(
  Backbone,
  Marionette,
  RouterFactory,
  Commander
) {

  'use strict';

  var Application = new Marionette.Application();

  Application.addInitializer(function() {

    // ルーターを生成し、URLの監視を開始する
    Application.router = RouterFactory.makeRouter(location.pathname);
    Backbone.history.start();

    Commander.command.setHandler('route', function(route, options) {
      options = _.isUndefined(options) ? {} : options;

      // options.silent はデフォルトで`false`
      options.silent = _.has(options, 'silent') ? options.silent : false;

      // option.silent が`true`なら、URLのみ変更し描画はしない
      Application.router.navigate('#'+route, !options.silent);
    });

    Commander.command.setHandler('error', function() {
      Application.router.navigate('#error', true);
    });

  });

  Application.start();
});

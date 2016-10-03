define([
  'backbone',
  'backbone.marionette',
  'routers/router_factory',
], function(
  Backbone,
  Marionette,
  RouterFactory
) {

  'use strict';

  var Application = new Marionette.Application();

  Application.addInitializer(function() {

    Application.router = RouterFactory.makeRouter(location.pathname);
    Backbone.history.start();

  });

  Application.start();
});

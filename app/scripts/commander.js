define([
  'backbone',
  'backbone.marionette'
], function(
  Backbone,
  Marionette
) {

  'use strict';


  var Commander = Marionette.Controller.extend({

    mediator : new Backbone.Wreqr.EventAggregator(),
    command  : new Backbone.Wreqr.Commands(),

  });

  return new Commander();
});

define([
  'backbone',
  'backbone.marionette'
], function(
  Backbone,
  Marionette
) {

  'use strict';

  var Commander = Marionette.Controller.extend({

    // command : new Backbone.Wreqr.Commands(),

    initialize: function()
    {
      this.command  = new Backbone.Wreqr.Commands();
    },

  });

  return new Commander();
});

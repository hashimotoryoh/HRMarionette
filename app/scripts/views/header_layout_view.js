define([
  'backbone.marionette',
  'hbs!tmpls/header_layout'
], function(
  Marionette,
  HeaderLayoutTmpl
) {
  'use strict';


  /**
   * ヘッダ領域のLayoutView
   *
   * @class   HeaderLayoutView
   * @module  LayoutView
   * @extends Marionette.LayoutView
   */
  var HeaderLayoutView = Marionette.LayoutView.extend({

    el: '#header',
    template: HeaderLayoutTmpl,

    regions: {
      main: {
        name        : 'headerMain',
        selector    : '#headerMain',
        regionClass : Marionette.Region
      },
    },

  });

  return HeaderLayoutView;
});

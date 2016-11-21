define([
  'backbone.marionette',
  'hbs!tmpls/footer_layout'
], function(
  Marionette,
  FooterLayoutTmpl
) {
  'use strict';

  /**
   * フッタ領域のLayoutView
   *
   * @class   FooterLayoutView
   * @module  LayoutView
   * @extends Marionette.LayoutView
   */
  var FooterLayoutView = Marionette.LayoutView.extend({

    el: '#footer',
    template: FooterLayoutTmpl,

    regions: {
      main: {
        name        : 'footerMain',
        selector    : '#footerMain',
        regionClass : Marionette.Region
      },
    },

  });

  return FooterLayoutView;
});

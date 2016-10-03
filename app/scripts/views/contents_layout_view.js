define([
  'backbone.marionette',
  'hbs!tmpls/contents_layout'
], function(
  Marionette,
  ContentsLayoutTmpl
) {

  'use cystrict';


  /**
   * コンテンツ領域のLayoutView
   *
   * @class   ContentsLayoutView
   * @module  LayoutView
   * @extends Marionette.LayoutView
   */
  var ContentsLayoutView = Marionette.LayoutView.extend({

    el: '#contents',
    template: ContentsLayoutTmpl,

    regions: {
      main: {
        name        : 'contentsMain',
        selector    : '#contentsMain',
        regionClass : Marionette.Region
      },
    },

  });

  return ContentsLayoutView;
});

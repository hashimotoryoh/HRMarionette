define([
  'views/base_view',
  'hbs!tmpls/index'
], function(
  BaseView,
  IndexTmpl
) {

  'use strict';


  /**
   * トップページのView
   *
   * @class   IndexView
   * @module  View
   * @extends BaseView
   */
  var IndexView = BaseView.extend({

    template: IndexTmpl,

  });

  return IndexView;
});

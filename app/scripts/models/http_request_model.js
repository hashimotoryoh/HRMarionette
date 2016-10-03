define([
  'backbone'
], function(
  Backbone
) {

  'use strict';

  /**
   * HTTPリクエストモデル
   *
   * @class   HttpRequestModel
   * @module  Model
   * @extends Backbone.Model
   */
  var HttpRequestModel = Backbone.Model.extend({

    Type: {
      GET     : 'GET',
      POST    : 'POST',
      PUT     : 'PUT',
      DELETE  : 'DELETE'
    },

    DataType: {
      HTML   : 'html',
      TEXT   : 'text',
      JSON   : 'json',
      JSONP  : 'jsonp',
      XML    : 'xml',
      SCRIPT : 'script'
    },


    defaults: function()
    {
      return {
        'type'     : this.Type.GET,
        'url'      : '',
        'data'     : {},
        'dataType' : this.DataType.HTML,
      };
    },

    initialize: function(options = {})
    {
      this._super();

      if (_.has(options, 'type') && _.contains(_.values(this.Type), options.type))
        this.set({ 'type' : options.type });

      if (_.has(options, 'url'))
        this.set({ 'url' : options.url });

      if (_.has(options, 'data'))
        this.set({ 'data' : options.data });

      if (_.has(options, 'dataType') && _.contains(_.values(this.DataType), options.dataType))
        this.set({ 'dataType' : options.dataType });
    },

    set: function(key, value, options)
    {
      // 一旦setして、後からバリデートする
      this._super(key, value, options);

      var isTypeError     = false;
      var isDataTypeError = false;

      // 引数がObjectかどうかでvalueの取り方が違う
      if (typeof key === 'object') {
        var attr = key;

        if (_.has(attr, 'type') && !_.contains(_.values(this.Type), attr.type)) {
          this._super({ 'type' : this.defaults.type });
          throw new Error('リクエストタイプが不正です。: '+String(attr.type));
        }
        if (_.has(attr, 'dataType') && !_.contains(_.values(this.DataType), attr.dataType)) {
          this._super({ 'dataType' : this.defaults.dataType });
          throw new Error('リクエストデータタイプが不正です。: '+String(attr.dataType));
        }
      }
      else {
        if (key === 'type' && !_.contains(_.values(this.Type), value)) {
          this._super({ 'type' : this.defaults.type });
          throw new Error('リクエストタイプが不正です。: '+String(value));
        }
        if (key === 'dataType' && !_.contains(_.values(this.DataType), value)) {
          this._super({ 'dataType' : this.defaults.dataType });
          throw new Error('リクエストデータタイプが不正です。: '+String(value));
        }
      }
    },

  });

  return HttpRequestModel;
});

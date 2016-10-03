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

        if (_.has(attr, 'type'))
          isTypeError = !_.contains(_.values(this.Type), attr.type);
        if (_.has(attr, 'dataType'))
          isDataTypeError = !_.contains(_.values(this.DataType), attr.dataType);
      }
      else {
        if (key === 'type')
          isTypeError = !_.contains(_.values(this.Type), value);
        if (key === 'dataType')
          isDataTypeError = !_.contains(_.values(this.DataType), value);
      }

      // バリデーションエラーなら、defaultsの値で上書いてエラーを投げる
      if (isTypeError) {
        this.set({ 'type' : this.defaults.type });
        throw new Error('リクエストタイプが不正です。: '+String(type));
      }
      if (isDataTypeError) {
        this.set({ 'dataType' : this.defaults.dataType });
        throw new Error('リクエストデータタイプが不正です。: '+String(dataType));
      }
    },

  });

  return HttpRequestModel;
});

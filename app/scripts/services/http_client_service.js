define([
  'backbone',
  'models/http_request_model',
], function(
  Backbone,
  RequestModel
) {

  'use strict';


  /**
   * HTTP通信を行う為のサービス
   * 各HTTP通信モデルのインスタンス管理を行う
   *
   * @class   HttpClientService
   * @extends Backbone.Model
   * @constructor
   */
  var HttpClientService = Backbone.Model.extend({

    models : [],

    /**
     * リクエストモデルを生成する。
     *
     * @param  {Object} data
     * @return {HttpRequestModel} リクエストモデル
     */
    createRequestModel: function(data)
    {
      return new RequestModel(data);
    },

    /**
     * リクエストする
     *
     * @param  {RequestModel} model
     * @return {Promise} リクエストしたPromise
     */
    send: function(model)
    {
      this.models.push(model);

      return new Promise(function(resolve, reject) {
        $.ajax({
          type     : model.get('type'),
          url      : model.get('url'),
          data     : model.get('data'),
          dataType : model.get('dataType'),
          success  : resolve,
          fail     : reject,
        });
      });
    },

  });

  return new HttpClientService();
});

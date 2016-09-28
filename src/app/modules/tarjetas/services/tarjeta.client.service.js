(function() {
  'use strict';
  angular
    .module('app.tarjeta')
    .factory('Tarjeta', Tarjeta);

  Tarjeta.$inject = ['$resource', 'API_BASE_URL'];
  /* @ngInject */
  function Tarjeta($resource, API_BASE_URL) {
    var config = {
      params: {
        id: '@id'
      }
    };

    var API_URL = API_BASE_URL + '/api/v1/tarjetas/:id';
    var Tarjeta = $resource(API_URL, config.params);

    return Tarjeta;
  }
})();

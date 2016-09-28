(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('tarjetas', {
        url: '/tarjetas',
        templateUrl: 'app/modules/tarjetas/views/main.html',
        controller: 'TarjetaController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

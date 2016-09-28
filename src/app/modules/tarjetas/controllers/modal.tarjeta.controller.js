(function() {
  'use strict';

  angular
    .module('app.tarjeta')
    .controller('ModalTarjetaCtrl', ModalTarjetaCtrl);

  ModalTarjetaCtrl.$inject = [
    '$uibModalInstance'
  ];
  /* @ngInject */
  function ModalTarjetaCtrl($uibModalInstance) {
    var vm = this;
    // Definición de los datos de modal
    vm.datos = {};

    vm.aceptar = function() {
      $uibModalInstance.close(vm.datos);
    };

    vm.cancelar = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

})();

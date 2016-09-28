(function() {
  'use strict';

  angular
    .module('app.tarjeta')
    .controller('ModalTarjetaController', ModalTarjetaController);

  ModalTarjetaController.$inject = [
    '$uibModalInstance'
  ];
  /* @ngInject */
  function ModalTarjetaController($uibModalInstance) {
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

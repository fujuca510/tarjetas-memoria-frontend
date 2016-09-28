(function() {
  'use strict';

  angular
    .module('app.tarjeta')
    .controller('TarjetaController', TarjetaController);

  TarjetaController.$inject = [
    '$log', '$uibModal', 'Tarjeta', '_'
  ];
  /* @ngInject */
  function TarjetaController($log, $uibModal, Tarjeta, _) {
    var vm = this;

    vm.abrirVentanaRegTarjeta = function (size) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '../app/modules/tarjetas/views/ModalTarjetaContent.html',
        controller: 'ModalTarjetaCtrl',
        controllerAs: 'vm',
        size: size
      });

      modalInstance.result.then(function (datos) {
        var tarjeta = new Tarjeta(datos);
        return tarjeta.$save();
      }, function() {
        $log.debug('Modal dismiss');
      }).then(function(resultado){
        cargarTarjetas();
      });
    };


    // Formato de cards que maneja la directiva flash-card-set
    // [{
    //   "name": "example1",
    //   "cards": [{
    //     "front": "hello",
    //     "back": "world"
    //   }, {
    //     "front": "foo",
    //     "back": "bar"
    //   }]
    // }, {
    //   "name": "example-two",
    //   "cards": [{
    //     "front": "cat",
    //     "back": "dog"
    //   }, {
    //     "front": "apple",
    //     "back": "orange"
    //   }]
    // }];
    function formatearRespuestaACardGrupo(tarjetas) {
      // Agrupamos las tarjetas por grupo
      var grupos = _.groupBy(tarjetas, function(item) {
        return item.grupo;
      });
      var tarjetasGrupos = [];
      // Iteramos los grupos que existen.
      _.mapObject(grupos, function(val, key) {
        var tarjetaGrupo = {};
        tarjetaGrupo.name = key;
        tarjetaGrupo.cards = [];
        val.forEach(function(tarjeta) {
          tarjetaGrupo.cards.push({
            front: tarjeta.texto_referencia,
            back: tarjeta.texto_memoria
          });
        });
        tarjetasGrupos.push(tarjetaGrupo);
      });
      return tarjetasGrupos;
    }

    function cargarTarjetas() {
      Tarjeta.query().$promise.then(function(resultados) {
        vm.tarjetasGrupos = formatearRespuestaACardGrupo(resultados);
      });
    }

    cargarTarjetas();
  }

})();

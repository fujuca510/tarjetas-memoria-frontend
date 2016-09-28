/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('API_BASE_URL', 'http://localhost:8800');

})();

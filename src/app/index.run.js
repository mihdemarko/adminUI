(function() {
  'use strict';

  angular
    .module('adminPart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

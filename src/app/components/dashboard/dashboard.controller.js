;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$log'];

    function DashboardController($log) {
        var vm = this;
        $log.log("Log")        
        $log.debug("Debug")//Debug is disabled from config
        $log.warn("Warn")
        $log.error("Error")
        $log.info("Info")
    }
}(window, angular, undefined));

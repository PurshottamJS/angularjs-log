;
(function(window, angular, undefined) {
    angular
        .module('app.dashboard')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider','$logProvider'];

    function config($stateProvider, $urlRouterProvider, $logProvider) {
        $logProvider.debugEnabled(false);

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            controller: "DashboardController as dashboard",
            // this is the place where to resolve dynamic template
            templateProvider: function($templateCache) {
                // simplified, expecting that the cache is filled
                // there should be some checking... and async $http loading if not found
                return $templateCache.get('components/dashboard/dashboard.template.html');
            }
        })
    };
}(window, angular, undefined));

angular.module('larionovTest', ['ui.bootstrap', 'ui.bootstrap.modal', 'ui.utils','ui.router','ngAnimate', 'angularCharts'/*templates_holder*/]);

angular.module('larionovTest').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});
angular.module('larionovTest').run(function($rootScope,$state,$stateParams) {

    $rootScope.$state=$state;
    $rootScope.$stateParams=$stateParams;

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});

angular.module('larionovTest').filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    };
});
angular.module('larionovTest', ['ui.bootstrap', 'ui.bootstrap.modal', 'ui.utils','ui.router','ngAnimate', 'angularCharts', 'ngMockE2E', 'ngResource' /*templates_holder*/]);

angular.module('larionovTest').config(function($stateProvider, $urlRouterProvider, $locationProvider) {


});
angular.module('larionovTest').run(['$rootScope', '$state', '$stateParams', '$httpBackend', '$resource', function($rootScope, $state, $stateParams, $httpBackend, $resource) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };


    $httpBackend.whenGET(/^\/modules\//).passThrough();
    $httpBackend.whenGET(/^modules\//).passThrough();
    $httpBackend.whenGET(/^assets\//).passThrough();
    $httpBackend.whenGET(/^listTasks\//).passThrough();
}]);

angular.module('larionovTest').filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    };
});
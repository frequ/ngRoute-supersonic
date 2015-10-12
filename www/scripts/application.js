angular.module('SteroidsApplication', [
  'supersonic',
  'ngRoute'
])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/category', {
            templateUrl: 'views/category.html',
            controller: 'CategoryCtrl',
            controllerAs: 'category'
        })
        .otherwise({
            redirectTo: '/'
        });
});

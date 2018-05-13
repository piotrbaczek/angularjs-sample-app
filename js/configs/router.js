angular.module('Skanstull')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider,
                  $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/',
                    controller: 'LoginCtrl',
                    templateUrl: 'template/login.html'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    controller: 'BaseCtrl',
                    templateUrl: 'template/dashboard.html'
                });
            $urlRouterProvider.otherwise('/');
        }]).run();
angular.module('Skanstull')
    .config(['$stateProvider',
        '$urlRouterProvider',
        '$mdIconProvider',
        function ($stateProvider,
                  $urlRouterProvider,
                  $mdIconProvider) {
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

            $mdIconProvider.fontSet('md', 'material-icons');
        }]).run();
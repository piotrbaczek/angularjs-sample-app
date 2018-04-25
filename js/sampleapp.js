angular.module("SampleApp", [
    'ngResource',
    'ngMaterial',
    'ui.router'
]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state({
            name: 'base',
            url: '/',
            template:'Welcome!'
        })
        .state({
            name: 'login',
            url: '/login',
            template: 'login'
        });
}]).run();
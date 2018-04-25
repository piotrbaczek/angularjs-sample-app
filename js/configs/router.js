angular.module('SampleApp')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'base',
                url: '/',
                template:'Welcome!'
            })
            .state({
                name: 'login',
                url: '/login',
                controller:'BaseController',
                template: 'login {{model}} <md-button class="md-primary md-raised" my-custom-directive ng-model="model">Kliknij mnie</md-button>'
            });
    }]).run();
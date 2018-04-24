angular.module("SampleApp")
    .directive("myCustomDirective", ['randomString', function (randomString) {
        return {
            restrict: 'E',
            controllerAs: 'myCustomDirectiveController',
            bindToController: {
                model: '=ngModel'
            },
            template: '<button class="btn btn-primary" ng-click="myCustomDirectiveController.changeValue()">Kliknij mnie</button>',
            replace: true,
            controller: function ($scope) {
                let vm = this;

                vm.changeValue = function () {
                    vm.model = randomString.generateString();
                };
            }
        }
    }]);


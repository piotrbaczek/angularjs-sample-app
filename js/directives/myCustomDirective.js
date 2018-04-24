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
            controller: function () {
                /**
                 * Change value of model
                 * @return void
                 */
                this.changeValue = function () {
                    this.model = randomString.generateString();
                };
            }
        }
    }]);


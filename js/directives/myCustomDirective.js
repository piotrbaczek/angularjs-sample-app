angular.module("SampleApp")
    .directive("myCustomDirective", ['randomString', '$timeout', function (randomString, $timeout) {
        return {
            restrict: 'A',
            scope: {
                model: '=ngModel'
            },
            link: function ($scope, $element) {
                $element.on('click', function () {
                    $timeout(function () {
                        $scope.model = randomString.generateString();
                    });
                });

                $scope.$on('$destroy',function () {
                    $element.off();
                });
            }
        }
    }]);


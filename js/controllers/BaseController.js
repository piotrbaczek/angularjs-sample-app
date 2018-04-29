angular.module("SampleApp")
    .controller("BaseController", ['$scope', 'randomString', function ($scope, randomString) {
        $scope.model = randomString.generateString();
        $scope.counter = 0;

        let modelWatcher = $scope.$watch('model', function (newValue, oldValue) {
            if (newValue && newValue !== oldValue) {
                $scope.counter++;
            }
        });

        $scope.$on('$destroy', function () {
            modelWatcher();
        });
    }]);

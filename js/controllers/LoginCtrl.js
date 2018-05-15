angular.module("Skanstull")
    .controller("LoginCtrl", [
        '$scope',
        function ($scope) {

            $scope.isOpen = false;

            $scope.demo = {
                isOpen: false,
                count: 0,
                selectedDirection: 'left'
            };

            $scope.activate = function () {
                alert('Welcome!');
            };
        }]);

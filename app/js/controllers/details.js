angular.module('details', [])
    .controller('DetailsCtrl', [
        '$scope', '$location', '$stateParams',
        function ($scope, $location, $stateParams) {

          $scope.params = $stateParams;

        }])
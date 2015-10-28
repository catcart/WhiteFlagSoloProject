var app = angular.module('whiteflag', []);

app.controller('optionsController', ['$scope', function($scope){

    $scope.divSlow = true;
    $scope.divConnect = true;
    $scope.divRepeat = true;
    $scope.divLost = true;
    $scope.divBreak = true;
    $scope.divGood = true;

    $scope.opacitySlow = function(){
        $scope.divSlow = false;

    };

    $scope.opacityConnect = function(){
        $scope.divConnect = false;
    };

    $scope.opacityRepeat = function(){
        $scope.divRepeat = false;
    };

    $scope.opacityLost = function(){
        $scope.divLost = false;
    };

    $scope.opacityBreak = function(){
        $scope.divBreak = false;
    };

    $scope.opacityGood = function(){
        $scope.divGood = false;
    };

    $scope.classSlow =

}]);
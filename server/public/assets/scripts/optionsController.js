var app = angular.module('whiteflag', []);

app.controller('optionsController', ['$scope', function($scope){


    var clicksSlow = 0;
    var clicksConnect = 0;
    var clicksRepeat = 0;
    var clicksLost = 0;
    var clicksBreak = 0;
    var clicksGood = 0;

    //var typeSlow;
    //var typeConnect;
    //var typeRepeat;
    //var typeLost;
    //var typeBreak;
    //var typeGood;

    var color;


    $scope.divSlow = true;
    $scope.divConnect = true;
    $scope.divRepeat = true;
    $scope.divLost = true;
    $scope.divBreak = true;
    $scope.divGood = true;

    var colorSlow = function() {
        switch (clicksSlow) {
            case (1) :
                color = 'red';
                break;
            case (2) :
                color = 'blue';
                break;
            case (3) :
                color = 'yellow';
                break;
            case (4) :
                color = 'purple';
                break;

            default :
                color = 'black';
        }
        console.log(color);
    };
    $scope.countSlow = function(){
        $scope.divSlow = false;
        countSlow = clicksSlow ++;
        console.log('clicksSlow');
        colorSlow(clicksSlow);

    };

        //typeSlow = clicktype;
        //return clickSwitch(typeSlow);
        //return colorMe(clicksSlow);

    $scope.countConnect = function(){
        $scope.divConnect = false;
        countConnect = clicksConnect ++;
        console.log('clicksConnect');
    };

    $scope.countRepeat = function(){
        $scope.divRepeat = false;
        countRepeat = clicksRepeat ++;
        console.log('clicksRepeat');
    };

    $scope.countLost = function(){
        $scope.divLost = false;
        countLost = clicksLost ++;
        console.log('clicksLost');
    };

    $scope.countBreak = function(){
        $scope.divBreak = false;
        countBreak = clicksBreak ++;
        console.log('clicksBreak');
    };

    $scope.countGood = function(){
        $scope.divGood = false;
        countGood = clicksGood ++;
        console.log('clicksGood');
    };

    //$scope.clearColor = function(){
    //    $scope.divSlow = true;
    //    $scope.divConnect = true;
    //    $scope.divRepeat = true;
    //    $scope.divLost = true;
    //    $scope.divBreak = true;
    //    $scope.divGood = true;
    //};

}]);

    //var clicktype;
    //
    //var clickSwitch = function(){
    //    switch(clicktype) {
    //
    //        case typeSlow : clicktype = clicksSlow;
    //            break;
    //        case typeConnect : clicktype = clicksConnect;
    //            break;
    //        case typeRepeat : clicktype = clicksRepeat;
    //            break;
    //        case typeLost : clicktype = clicksLost;
    //            break;
    //        case typeGood : clicktype = clicksGood;
    //            break;
    //
    //        default : clicktype = 0;
    //
    //    }
    //
    //    console.log('clickSwitch went through');
    //};
    //
    //var color;
    //var clicks;
    //
    //var colorMe = function(){
    //    switch(clicks){
    //        case (1) : color = 'red';
    //            break;
    //        case (2) : color = 'blue';
    //            break;
    //        case (3) : color = 'yellow';
    //            break;
    //        case (4) : color = 'purple';
    //            break;
    //
    //        default : color = 'black';
    //            return colorMe(1);
    //    }
    //};

//var determineOpacity = function(){
//  switch (clicks)
//  {
//      case 1 : opacity = .2;
//          break;
//      case 2 : opacity = .4;
//          break;
//      case 3 : opacity = .6;
//          break;
//      case 4 : opacity = .8;
//          break;
//      case (clicks >= 5) : opacity = 1.;
//          break;
//
//      default : opacity = 0.0;
//  }
//};

    //$scope.addReaction = function(){
    //    var sendSlow =  {feeling: slow, clicks: 1};
    //    $http({
    //        method:'POST',
    //        url: '/models/Reaction',
    //        data: sendSlow
    //    }).then(function(response){
    //       $scope.
    //    });
    //
    //};
    //$scope.opacitySlow = function(){
    //
    //
    //};





    //    $scope.opacitySlow = function(){
    //        $scope.divSlow = false;
    //
    //};


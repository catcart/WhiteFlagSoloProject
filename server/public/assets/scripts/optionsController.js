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

    $scope.slowClass = "";
    $scope.connectClass = "";
    $scope.repeatClass = "";
    $scope.lostClass = "";
    $scope.breakClass = "";
    $scope.goodClass = "";

    $scope.slowBar = "slowBar";
    $scope.connectBar = "connectBar";
    $scope.repeatBar = "repeatBar";
    $scope.lostBar = "lostBar";
    $scope.breakBar = "breakBar";
    $scope.goodBar = "goodBar";

    $scope.divSlow = true;
    $scope.divConnect = true;
    $scope.divRepeat = true;
    $scope.divLost = true;
    $scope.divBreak = true;
    $scope.divGood = true;

    //var colorSlow = function() {
    //    switch (clicksSlow) {
    //        case (1) :
    //            color = 'red';
    //            break;
    //        case (2) :
    //            color = 'blue';
    //            break;
    //        case (3) :
    //            color = 'yellow';
    //            break;
    //        case (4) :
    //            color = 'purple';
    //            break;
    //
    //        default :
    //            color = 'black';
    //    }
    //    console.log(color);
    //};


    $scope.countSlow = function(){
        $scope.divSlow = false;
        clicks = clicksSlow +=1;
        console.log('clicksSlow');

        switch (clicks)
        {
            case 1 :
                $scope.slowClass="light";
                break;
            case 2 :
                $scope.slowClasss="medium";
                break;
            case 3 :
                $scope.slowClass="heavy";
                break;
            case 4 :
                $scope.slowClass="ultraHeavy";
                break;
            case (clicks >= 5) :
                $scope.slowClass="full";
                break;

            default : "light";
        }

        console.log($scope.slowClass);
        $scope.divSlow = false;
        console.log('clicksSlow');
    };

    $scope.countConnect = function(){
        var clicks = clicksConnect+=1;
        console.log(clicks);
        switch (clicks)
          {
              case 1 :
                  $scope.connectClass="light";
                  break;
              case 2 :
                  $scope.connectClass="medium";
                  break;
              case 3 :
                  $scope.connectClass="heavy";
                  break;
              case 4 :
                  $scope.connectClass="ultraHeavy";
                  break;
              case (clicks >= 5) :
                  $scope.connectClass="full";
                  break;

              default : "light";
          }

        console.log($scope.connectClass);
        $scope.divConnect = false;
        console.log('clicksConnect');
    };

    $scope.countRepeat = function(){
        $scope.divRepeat = false;
        clicks = clicksRepeat +=1;
        console.log('clicksRepeat');

        switch (clicks)
        {
            case 1 :
                $scope.repeatClass="light";
                break;
            case 2 :
                $scope.repeatClasss="medium";
                break;
            case 3 :
                $scope.repeatClass="heavy";
                break;
            case 4 :
                $scope.repeatClass="ultraHeavy";
                break;
            case (clicks >= 5) :
                $scope.repeatClass="full";
                break;

            default : "light";
        }

        console.log($scope.repeatClass);
        $scope.divRepeat = false;
        console.log('clicksRepeat');
    };


    $scope.countLost = function(){
        $scope.divLost = false;
        clicks = clicksLost +=1;
        console.log('clicksLost');
        switch (clicks)
        {
            case 1 :
                $scope.lostClass="light";
                break;
            case 2 :
                $scope.lostClasss="medium";
                break;
            case 3 :
                $scope.lostClass="heavy";
                break;
            case 4 :
                $scope.lostClass="ultraHeavy";
                break;
            case (clicks >= 5) :
                $scope.lostClass="full";
                break;

            default : "light";
        }

        console.log($scope.lostClass);
        $scope.divLost = false;
        console.log('clicksLost');
    };


    $scope.countBreak = function(){
        $scope.divBreak = false;
        clicks = clicksBreak +=1;
        console.log('clicksBreak');

        switch (clicks)
        {
            case 1 :
                $scope.breakClass="light";
                break;
            case 2 :
                $scope.breakClasss="medium";
                break;
            case 3 :
                $scope.breakClass="heavy";
                break;
            case 4 :
                $scope.breakClass="ultraHeavy";
                break;
            case (clicks >= 5) :
                $scope.breakClass="full";
                break;

            default : "light";
        }

        console.log($scope.breakClass);
        $scope.divBreak = false;
        console.log('clicksBreak');
        switch (clicks)
        {
            case 1 :
                $scope.slowClass="light";
                break;
            case 2 :
                $scope.slowClasss="medium";
                break;
            case 3 :
                $scope.slowClass="heavy";
                break;
            case 4 :
                $scope.slowClass="ultraHeavy";
                break;
            case (clicks >= 5) :
                $scope.slowClass="full";
                break;

            default : "light";
        }

        console.log($scope.breakClass);
        $scope.divBreak = false;
        console.log('clicksBreak');
    };



    $scope.countGood = function(){
        $scope.divGood = false;
        clicks = clicksGood +=1;
        console.log('clicksGood');
        switch (clicks)
        {
            case 1 :
                $scope.goodClass="light";
                break;
            case 2 :
                $scope.goodClasss="medium";
                break;
            case 3 :
                $scope.goodClass="heavy";
                break;
            case 4 :
                $scope.goodClass="ultraHeavy";
                break;
            case (clicks >= 5) :
                $scope.goodClass="full";
                break;

            default : "light";
        }

        console.log($scope.goodClass);
        $scope.divGood = false;
        console.log('clicksGood');
    };


    $scope.clearColor = function(){

        clicksSlow = 0;
        clicksConnect = 0;
        clicksRepeat = 0;
        clicksLost = 0;
        clicksBreak = 0;
        clicksGood = 0;

        $scope.divSlow = true;
        $scope.divConnect = true;
        $scope.divRepeat = true;
        $scope.divLost = true;
        $scope.divBreak = true;
        $scope.divGood = true;
    };

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

//module.exports = router;
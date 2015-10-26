var app = angular.module('whiteFlagApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'loginController'
        });
        //.when('/faq', {
        //    templateUrl: 'views/faq.html',
        //    controller: 'faqController'
        //})
        //.when('/options', {
        //    template: 'views/options.html'
        //});



    $locationProvider.html5Mode(true);

});
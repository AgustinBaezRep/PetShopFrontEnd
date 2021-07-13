'use strict';

var app = angular.module('e-commerce',[
    'ui.router'
])

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'home'
    });

    $urlRouterProvider.otherwise('/home')
})


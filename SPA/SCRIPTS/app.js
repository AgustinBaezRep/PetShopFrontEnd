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
    })
    .state('listadoProductos', {
        url: '/listadoProductos',   
        templateUrl: 'listadoProductos.html',
        controller: 'ListadoProductosController',
        controllerAs: 'listadoProductos'
        
    })
    .state('carrito', {
        url: '/carrito',
        templateUrl: 'carrito.html',
        controller: 'carritoController',
        controllerAs: 'carrito'
    })
    .state('beneficioUsuario', {
        url: '/beneficioUsuario',
        templateUrl: 'beneficioUsuario.html',
        controller: 'beneficioUsuarioController',
        controllerAs: 'beneficioUsuario'
    })
    .state('detalleProducto', {
        url: '/detalleProducto',
        templateUrl: 'detalleProducto.html',
        controller: 'detalleProductoController',
        controllerAs: 'detalleProducto'
    })
    ;

    $urlRouterProvider.otherwise('/home')
})


'use strict';

var app = angular.module('e-commerce',[
    'ui.router'
])

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
        url:'spa/views//home',
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'home'
    })
    .state('listadoProductos', {
        url: 'spa/views//listadoProductos',   
        templateUrl: 'listadoProductos.html',
        controller: 'ListadoProductosController',
        controllerAs: 'listadoProductos'
        
    })
    .state('carrito', {
        url: 'spa/views//carrito',
        templateUrl: 'carrito.html',
        controller: 'carritoController',
        controllerAs: 'carrito'
    })
    .state('beneficioUsuario', {
        url: 'spa/views//beneficioUsuario',
        templateUrl: 'beneficioUsuario.html',
        controller: 'beneficioUsuarioController',
        controllerAs: 'beneficioUsuario'
    })
    .state('detalleProducto', {
        url: 'spa/views//detalleProducto',
        templateUrl: 'detalleProducto.html',
        controller: 'detalleProductoController',
        controllerAs: 'detalleProducto'
    })
    ;

    $urlRouterProvider.otherwise('/home')
})


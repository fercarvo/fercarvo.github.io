angular.module('app', ['ui.router'])
    .config(["$stateProvider", "$compileProvider", function ($stateProvider, $compileProvider) {
        $stateProvider
            .state('home', {
                templateUrl: '/apps/ia/views/home.html',
                controller: 'home'
            })
            .state('documento', {
                templateUrl: '/apps/ia/views/documento.html',
                controller: 'documento'
            })
            .state('grafico', {
                templateUrl: 'views/grafico.html',
                controller: 'grafico'
            })
            .state('grafico.matrix', {
                templateUrl: 'views/grafico.matrix.html',
                controller: 'grafico.matrix'
            })
            .state('grafico.barras', {
                templateUrl: 'views/grafico.barras.html',
                controller: 'grafico.barras'
            })
            .state('listener', {
                templateUrl: 'views/stream.html',
                controller: 'listener'
            })        
    }])
    .run(["$state", "$http", "$templateCache", function ($state, $http, $templateCache) {
        $state.go('documento')
    }])
    .factory("data", [function(){

    }])
    .controller('documento', ["$scope", "$state", "$http", "data", function($scope, $state, $http, data){

    }])
    .controller('listener', ["$scope", "$state", function($scope, $state){

    }])
    .controller('grafico', ["$scope", "$state", "data", '$rootScope', function ($scope, $state, data, $rootScope) {

    }])
    .controller('grafico.matrix', ["$scope", "$state", "data", function ($scope, $state, data){

    }])
    .controller('grafico.barras', ["$scope", "$state", "data", function ($scope, $state, data){

    }])
    .controller("home", [function () {

    }])
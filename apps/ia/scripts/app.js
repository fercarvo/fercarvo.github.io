angular.module('app', ['ui.router'])
    .config(["$stateProvider", "$compileProvider", function ($stateProvider, $compileProvider) {
        $stateProvider
            .state('documento', {
                templateUrl: '/apps/ia/views/documento.html',
                controller: 'documento'
            })
            .state('diapositiva', {
                templateUrl: '/apps/ia/views/diapositiva.html',
                controller: 'diapositiva'
            })
            .state('aplicativo', {
                templateUrl: '/apps/ia/views/aplicativo.html',
                controller: 'aplicativo'
            })     
    }])
    .run(["$state", "$http", "$templateCache", function ($state, $http, $templateCache) {
        $state.go('documento')
    }])
    .controller('documento', ["$scope", "$state", "$http", function($scope, $state, $http){

    }])
    .controller('diapositiva', ["$scope", "$state", function($scope, $state){

    }])
    .controller('aplicativo', ["$scope", "$state", '$rootScope', function ($scope, $state, $rootScope) {

    }])
angular.module('app', ['ui.router'])
    .config(["$stateProvider", "$compileProvider", function ($stateProvider, $compileProvider) {
        $stateProvider
            .state('documento', {
                templateUrl: 'apps/ia/views/documento.html',
                controller: 'documento'
            })
            .state('diapositiva', {
                templateUrl: 'apps/ia/views/diapositiva.html',
                controller: 'diapositiva'
            })
            .state('aplicativo', {
                templateUrl: 'apps/ia/views/aplicativo.html',
                controller: 'aplicativo'
            })     
    }])
    .run(["$state", "$http", "$templateCache", function ($state, $http, $templateCache) {
        loadTemplates($state, "aplicativo", $http, $templateCache)

    }])
    .controller('aplicativo', ["$scope", function ($scope) {

        $scope.factor = 0.9
        $scope.iteraciones = 600000

        $scope.calcular = async function (factor, iteraciones) {
            waitingDialog.show('NN en curso, por favor espere');
            console.time('Execution time')
            var output = [0,0,0,1]
            var worker = new GenericWebWorker(output, factor, iteraciones, Matrix, sigmoid, redNeuronal)

            var res = await worker.exec((output, factor, iter, Matrix, sigmoid, redNeuronal) => {
                var res = redNeuronal(output, factor, iter, Matrix, sigmoid)
                console.log('End Process...')
                return res
            })
            waitingDialog.hide()
            $scope.resultado = res
            $scope.$apply()
            //console.log(res)
            console.timeEnd('Execution time')
            console.log('\n')
            console.log('XNOR 1 0', XNOR(1, 0, res))
            console.log('XNOR 0 0', XNOR(0, 0, res))
            console.log('XNOR 1 1', XNOR(1, 1, res))
            console.log('XNOR 0 1', XNOR(0, 1, res))
        }

    }])
    .controller('documento', ["$scope", "$state", "$http", function($scope, $state, $http){
    }])
    .controller('diapositiva', ["$scope", "$state", function($scope, $state){
    }])
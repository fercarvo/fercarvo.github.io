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

        var operaciones = { 
            AND: [0,0,0,1],
            XNOR: [1,0,0,1],
            XOR: [0,1,1,0]
        }

        $scope.factor = 0.9
        $scope.iteraciones = 600000
        $scope.resultado = null //Resultado de la generación de operaciones
        $scope.estimador = false //Muestra u oculta el panel de calculo de estimador
        $scope.operacion_nombre = null //Nombre de la operacion que se esta calculando

        $scope.cambiar_op = function(operacion) {
            if (operacion !== $scope.operacion_nombre)
                $scope.estimador = false;
            else
                $scope.estimador = true;
        }

        $scope.calcular = async function (factor, iteraciones, operacion) {

            if (!operacion)
                return alert("Ingrese una operacion")

            $scope.operacion_nombre = operacion
            waitingDialog.show('NN en curso, por favor espere');
            console.time('Execution time')
            var output = operaciones[operacion]
            var worker = new GenericWebWorker(output, factor, iteraciones, Matrix, sigmoid, redNeuronal)

            var res = await worker.exec((output, factor, iter, Matrix, sigmoid, redNeuronal) => {
                var res = redNeuronal(output, factor, iter, Matrix, sigmoid)
                console.log('End Process...')
                return res
            })
            waitingDialog.hide()
            $scope.resultado = res
            $scope.estimador = true
            $scope.$apply()            
            //console.log(res)
            console.timeEnd('Execution time')
            console.log('\n')
            console.log('XNOR 1 0', XNOR(1, 0, res))
            console.log('XNOR 0 0', XNOR(0, 0, res))
            console.log('XNOR 1 1', XNOR(1, 1, res))
            console.log('XNOR 0 1', XNOR(0, 1, res))
        }

        $scope.estimar = function (val1, val2) {
            $scope.resultado_estimar = XNOR(val1, val2, $scope.resultado)
        }

    }])
    .controller('documento', ["$scope", "$state", "$http", function($scope, $state, $http){
    }])
    .controller('diapositiva', ["$scope", "$state", function($scope, $state){
    }])
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

        loadTemplates($state, "documento", $http, $templateCache)

    }])
    .controller('documento', ["$scope", "$state", "$http", function($scope, $state, $http){

    }])
    .controller('diapositiva', ["$scope", "$state", function($scope, $state){

    }])
    .controller('aplicativo', ["$scope", function ($scope) {

        var worker = new GenericWebWorker([1,2,3,4,5,6,7])

        worker.exec(arr => {
            console.log(arr)
            for (var i = 0; i < 2000000000; i++) {
                
            }
            return i
        }).then(res => console.log('termino worker'))

        const dot = (X, Y) => {
            var result = new Array(X.length);
            for (var r = 0; r < X.length; r++) {
                result[r] = new Array(Y[0].length).fill(0)
                for (var c = 0; c < Y[0].length; c++) {
                    for (var i = 0; i < X[0].length; i++)
                        result[r][c] += a[r][i] * b[i][c];              
                }
            }
            return result
        }

        const calc = (X, fn) => {
            for (var i = 0; i < X.length; i++)
                for (var j = 0; j < X[0].length; j++)
                    X[i][j] = fn(X[i][j]);

            return X
        }

        function sigmoid(matrix, flag = false, factor = 1) {
            matrix = matrix.tolist();        
            if (flag) {
                for (var i = 0; i < matrix.length; i++)
                    for (var j = 0; j < matrix[0].length; j++)
                        matrix[i][j] = ( matrix[i][j] * (1 - matrix[i][j]) ) * factor;           
            } else {
                for (var i = 0; i < matrix.length; i++)
                    for (var j = 0; j < matrix[0].length; j++)
                        matrix[i][j] = 1 / (1 + Math.exp(-matrix[i][j]));
            }
            return nj.array(matrix)
        }

        //console.log('nj.array', nj.array, 'nj.random', nj.random)
        function redNeuronal (valor_esperado, factor) {
            var entradas = nj.array([[0, 0], [0, 1], [1, 0], [1, 1]])
            valor_esperado = nj.array([valor_esperado]).T 
            var layer_inputs;
            var w_hidden_layer;
            var w_out_layer;
            var error_w_out_layer;
            var delta_w_out_layer;
            var error_w_hidden_layer;
            var delta_w_hidden_layer;

            var W1 = nj.random([2, 3]).tolist()
            W1 = calc(W1, x => 2*x-1)

            /*for (var i = 0; i < W1.length; i++) {
                for (var j = 0; j < W1[0].length; j++) {
                    W1[i][j] = 2 * W1[i][j] - 1;
                }
            }*/

            var W2 = nj.random([3, 1]).tolist()
            W2 = calc(W2, x => 2*x-1)
            /*for (var i = 0; i < W2.length; i++) {
                for (var j = 0; j < W2[0].length; j++) {
                    W2[i][j] = 2 * W2[i][j] - 1;
                }
            }*/

            W1 = nj.array(W1)
            W2 = nj.array(W2)

            for (var i = 0; i < 100000; i++) {
                layer_inputs = entradas
                w_hidden_layer = sigmoid(nj.dot(layer_inputs, W1), false, factor)
                w_out_layer = sigmoid(nj.dot(w_hidden_layer, W2), false, factor)

                error_w_out_layer = valor_esperado.subtract(w_out_layer)
                delta_w_out_layer = error_w_out_layer.multiply( sigmoid(w_out_layer, true, factor) )
                error_w_hidden_layer = nj.dot(delta_w_out_layer, W2.T)
                delta_w_hidden_layer = error_w_hidden_layer.multiply( sigmoid(w_hidden_layer, true, factor) )
                W1 = W1.add( nj.dot(layer_inputs.T, delta_w_hidden_layer) )
                W2 = W2.add( nj.dot(w_hidden_layer.T, delta_w_out_layer) )
                console.log(i)
            }

            W2 = W2//.tolist();
            W1 = W1//.tolist();

            return { W2, W1, w_out_layer }
        }

        var factor = 0.7
        /*var res = redNeuronal([0,0,0,1], factor)
        console.log(res)
        console.log('total', XNOR(1, 0, res))
        console.log('total', XNOR(0, 0, res))
        console.log('total', XNOR(1, 1, res))
        console.log('total', XNOR(0, 1, res))
        */

        function XNOR (val1, val2, res) {
            var result1 = sigmoid( nj.dot( nj.array([[val1,val2]]), res.W1 ) , false, 1)
            var result2 = sigmoid( nj.dot(result1, res.W2), false, 1)
            return result2.tolist()[0][0]
        }
    }])
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
    .controller('aplicativo', ["$scope", function ($scope) {
        class Matrix {
            constructor (matrix, param) {
                if (matrix && Array.isArray(matrix) && matrix.length > 0) {
                    this.rows = matrix.length
                    this.columns = matrix[0].length

                    var ok = matrix.every(row => {
                        return (row.length === this.columns) && row.every(elm => {
                            return 'number' === typeof elm
                        })
                    })

                    if (!ok)
                        throw new Error('Invalid matrix');

                    this.data = matrix
                } else if (param === 'empty'){
                    this.rows = null
                    this.columns = null
                    this.data = []
                } else {
                    throw new Error(`${matrix} is not an Array of Number Arrays`)
                }
            }


            static dot (A, B) {
                var result = new Array(A.length);
                for (var r = 0; r < A.length; r++) {
                    result[r] = new Array(B[0].length).fill(0)
                    for (var c = 0; c < B[0].length; c++) {
                        for (var i = 0; i < A[0].length; i++)
                            result[r][c] += A[r][i] * B[i][c];              
                    }
                }
                return result
            }

            static random (n, m) {
                var matrix = new Array(n).fill( new Array(m).fill(0) )
                return matrix.map(fila => fila.map(z => Math.random() ))
            }

            static subtract (A, B) {
                return A.map((fila, i) => fila.map((elm, j) => elm - B[i][j]))
            }

            static add (A, B) {
                return A.map((fila, i) => fila.map((elm, j) => elm + B[i][j]))
            }

            static multiply (A, B) {
                return A.map((fila, i) => fila.map((elm, j) => elm * B[i][j]))
            }

            static eval (X, fn) {
                return X.map(fila => fila.map(val => fn(val)))
            }

            static transpose (matrix) { 
                return matrix[0].map((x,i)=> matrix.map(x => x[i])) 
            }
        }

        function sigmoid(matrix, flag = false, factor = 1) {
            if (flag)
                return Matrix.eval(matrix, x => ((x*(1-x))*factor))          
            else
                return Matrix.eval(matrix, x => 1/(1 + Math.exp(-x)))
        }

        function redNeuronal (valor_esperado, factor, iter = 500000) {
            var entradas = [[0, 0], [0, 1], [1, 0], [1, 1]]
            valor_esperado = valor_esperado.map(n => [n]) //Transpuesta
            var layer_inputs;
            var w_hidden_layer;
            var w_out_layer;
            var error_w_out_layer;
            var delta_w_out_layer;
            var error_w_hidden_layer;
            var delta_w_hidden_layer;

            var W1 = Matrix.random(2, 3)
            var W2 = Matrix.random(3, 1)

            W1 = Matrix.eval(W1, x => 2*x-1)
            W2 = Matrix.eval(W2, x => 2*x-1)


            for (var i = 0; i < iter; i++) {
                layer_inputs = entradas
                w_hidden_layer = sigmoid(Matrix.dot(layer_inputs, W1), false, factor)
                w_out_layer = sigmoid(Matrix.dot(w_hidden_layer, W2), false, factor)

                error_w_out_layer = Matrix.subtract(valor_esperado, w_out_layer)
                delta_w_out_layer = Matrix.multiply(error_w_out_layer, sigmoid(w_out_layer, true, factor))

                error_w_hidden_layer = Matrix.dot(delta_w_out_layer, Matrix.transpose(W2))
                delta_w_hidden_layer = Matrix.multiply(error_w_hidden_layer, sigmoid(w_hidden_layer, true, factor))

                W1 = Matrix.add( W1, Matrix.dot( Matrix.transpose(layer_inputs) , delta_w_hidden_layer ) )
                W2 = Matrix.add( W2, Matrix.dot( Matrix.transpose(w_hidden_layer) , delta_w_out_layer ) )
            }
            return { W2, W1, w_out_layer }
        }

        function XNOR (val1, val2, res) {
            var result1 = sigmoid( Matrix.dot( [[val1, val2]], res.W1 ) , false, 1)
            var result2 = sigmoid( Matrix.dot(result1, res.W2), false, 1)
            return result2[0][0]
        }

        var worker = new GenericWebWorker(Matrix, sigmoid, redNeuronal, XNOR)

        worker.exec((Matrix, sigmoid, redNeuronal, XNOR) => {
            var res = redNeuronal([0,0,0,1], 0.7, 500000)
            console.log(res)
            return res

        }).then(res => {
            console.log('total', XNOR(1, 0, res))
            console.log('total', XNOR(0, 0, res))
            console.log('total', XNOR(1, 1, res))
            console.log('total', XNOR(0, 1, res))
        })



    }])
    .controller('documento', ["$scope", "$state", "$http", function($scope, $state, $http){

    }])
    .controller('diapositiva', ["$scope", "$state", function($scope, $state){

    }])

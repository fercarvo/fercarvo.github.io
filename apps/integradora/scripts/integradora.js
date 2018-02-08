angular.module('app', ['ui.router', 'nvd3'])
    .config(["$stateProvider", "$compileProvider", function ($stateProvider, $compileProvider) {
        $stateProvider
            .state('home', {
                templateUrl: 'apps/integradora/views/home.html',
                controller: 'home'
            })
            .state('corpus', {
                templateUrl: 'apps/integradora/views/corpus.html',
                controller: 'corpus'
            })
            .state('archivos', {
                templateUrl: 'apps/integradora/views/archivos.html',
                controller: 'archivos'
            })
            .state('archivos.process', {
                templateUrl: 'apps/integradora/views/archivos.process.html',
                controller: 'archivos.process'
            })
            .state('archivos.createText', {
                templateUrl: 'apps/integradora/views/archivos.createText.html',
                controller: 'archivos.createText'
            })
            .state('archivos.createFiles', {
                templateUrl: 'apps/integradora/views/archivos.createFiles.html',
                controller: 'archivos.createFiles'
            })
            /*.state('corpus-creator', {
                templateUrl: 'apps/integradora/views/corpus-creator.html',
                controller: 'corpus-creator'
            })*/
            .state('grafico', {
                templateUrl: 'apps/integradora/views/grafico.html',
                controller: 'grafico'
            })
            .state('grafico.matrix', {
                templateUrl: 'apps/integradora/views/grafico.matrix.html',
                controller: 'grafico.matrix'
            })
            .state('grafico.barras', {
                templateUrl: 'apps/integradora/views/grafico.barras.html',
                controller: 'grafico.barras'
            })
            .state('documento', {
                templateUrl: 'apps/integradora/views/documento.html',
                controller: 'documento'
            })
            /*.state('listener', {
                templateUrl: 'apps/integradora/views/stream.html',
                controller: 'listener'
            })*/          
    }])
    .run(["$state", "$http", "$templateCache", function ($state, $http, $templateCache) {
        loadTemplates($state, "corpus", $http, $templateCache)
    }])
    .factory("data", [function(){
        var data = {
            params: {
                id1: null,
                id2: null,
                k: null,
                lambda: null
            },
            resultado: null,
            grafico2: {}
        }
        return data
    }])
    .controller("archivos" ,["$state", function($state){
        $state.go("archivos.process")
    }])
    .controller("archivos.process", ["$scope", "$state", "data", "$rootScope", function($scope, $state, data, $rootScope){

        var peticion = ""
        var corpus1 = null;
        var corpus2 = null;
        $scope.k = 5
        $scope.lambda = 0.001
        $scope.alpha = 0.1
        $scope.tfidf = "double"
        $scope.topicos = "documentos"
        $scope.stemming = "spanish"

        $scope.corpus1 = {}
        $scope.corpus2 = {}

        document.getElementById('corpus1').onchange = evt => {
            var file = evt.target.files[0];
            $scope.corpus1.type = file.type || "n/n"
            $scope.corpus1.size = file.size
            $scope.corpus1.show = true
            $scope.$apply()

            if (file.type !== "application/json") {
                document.getElementById('corpus1').value = ""
                $scope.corpus1.show = false
                $scope.$apply()
                return alert("Por favor ingrese un archivo json")
            }

            var reader = new FileReader();

            reader.onload = () => {
                try {
                    corpus1 = JSON.parse(reader.result)
                    console.log("Corpus1 length", corpus1.length)
                } catch (e) {
                    console.log("Error leer archivo", e)
                    alert("Archivo no valido, por favor ingrese uno con el formato JSON adecuado")
                }
            }

            reader.readAsText(file);
        }

        document.getElementById('corpus2').onchange = evt => {
            var file = evt.target.files[0];
            $scope.corpus2.type = file.type || "n/n"
            $scope.corpus2.size = file.size
            $scope.corpus2.show = true
            $scope.$apply()

            if (file.type !== "application/json") {
                document.getElementById('corpus2').value = ""
                $scope.corpus2.show = false
                $scope.$apply()
                return alert("Por favor ingrese un archivo json")
            }

            var reader = new FileReader();

            reader.onload = () => {
                try {
                    corpus2 = JSON.parse(reader.result)
                    console.log("Corpus2 length", corpus2.length)
                } catch (e) {
                    console.log("Error leer archivo", e)
                    alert("Archivo no valido, por favor ingrese uno con el formato JSON adecuado")
                }
            }

            reader.readAsText(file);
        }

        $scope.generar = async function (k, lambda, tfidf, topicos, stemming) {

            data.params.k = k
            data.params.lambda = lambda

            var time = modalWait('Procesando, por favor espere')
            //waitingDialog.show('Procesando corpus, por favor espere');
            try {
                var res = await getJPP(corpus1, corpus2, data.params.k, data.params.lambda, tfidf, topicos, stemming);
                data.resultado = res;
                $rootScope.fechaDia1 = "Sin fecha";
                $rootScope.fechaDia2 = "Sin fecha";

                if (res.M)
                    return $state.go("grafico");
                alert("No se ha obtenido la informacion correcta")
                
            } catch (e) { console.log(e); alert(`Error: ${e}`) }
            finally { console.log('time', time()) }             
        }

    }])
    .controller("archivos.createText" ,["$scope", "$state", function($scope, $state){

        $scope.documents = [{id: "document", data: ""}];

        $scope.crearCorpus = (file_name) => {
            var corpus = $scope.documents.map(d => {return {text: [d.data]}})
            corpus = JSON.stringify(corpus)
            file_name = `${file_name}.json`;

            var a = document.createElement('a');
            var url = window.URL.createObjectURL(new Blob([corpus], {type: 'application/json'}, file_name));

            a.setAttribute('href', url)
            a.setAttribute('download', file_name)
            document.body.appendChild(a)
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        }

        $scope.delete = (array, index) => array.splice(index, 1);

        $scope.addDoc = function () {
            $scope.documents = [{id: "document", data: ""}, ...$scope.documents]
        }

    }])
    .controller("archivos.createFiles" ,["$scope", "$state", function($scope, $state){
        
        $scope.files = []
        var corpus_json = []

        document.getElementById('filesInput').onchange = evt => {
            var files = evt.target.files;
            $scope.disabled = true;
            $scope.files = [];
            var corpus = []
            corpus_json = []

            for (var file of files) {
                $scope.files.push({name: file.name, type: file.type || "n/n"});

                corpus.push(new Promise(resolve => {
                    var reader = new FileReader();
                    reader.onload = () => resolve( {text: [reader.result]} );
                    reader.readAsText(file);
                }))
            }

            $scope.$apply();

            Promise.all(corpus).then(corpus => {
                $scope.disabled = false;
                corpus_json = corpus
                console.log("corpus", corpus_json)
                $scope.$apply()
            })
            .catch(e => console.log("Error leer archivos", e))
        }

        $scope.crearCorpus = fileName => {
            fileName = fileName + '.json'
            if (confirm(`Desea guardar el archivo ${fileName}?`)) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(new Blob([JSON.stringify(corpus_json)], {type: 'application/json'}, fileName));

                a.setAttribute('href', url)
                a.setAttribute('download', fileName)
                document.body.appendChild(a)
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            }
        }


    }])
    .controller('corpus', ["$scope", "$state", "$http", "data", "$rootScope", function($scope, $state, $http, data, $rootScope){
        
        var peticion = ""
        var contador = []

        $scope.k = 5
        $scope.lambda = 0.001
        $scope.alpha = 0.01
        $scope.tfidf = "log"
        $scope.topicos = "terminos"

        $scope.calculo = function (corpus) {
            if (contador.length < 2) {
                contador.push(corpus)
                corpus.check = true
            }

            if (contador.filter(c => c._id === corpus._id).length > 1)
                contador = [];        

            if (contador.length == 2 && contador[0]._id != contador[1]._id)
                $scope.disable = true;
        }

        $scope.cancelar = function () {
            $scope.disable = null
            contador = []
            $scope.data.forEach(corpus => {
                corpus.check = false
            })
            peticion = ""
        }

        $scope.generar = async function (k, lambda, tfidf, topicos) {
            if (contador.length !== 2)
                return alert("Por favor, seleccione dos corpus a procesar");

            contador.sort((a, b) => new Date(a.fecha)- new Date(b.fecha))

            data.params.id1 = contador[0]._id
            data.params.id2 = contador[1]._id
            data.params.k = k
            data.params.lambda = lambda

            console.log(`\nCp1 ${contador[0].fecha}`)
            console.log(`Cp2 ${contador[1].fecha}`)

            //waitingDialog.show('Procesando corpus, por favor espere');
            var time = modalWait('Procesando, por favor espere');

            try {
                var res = await getJPP(data.params.id1, data.params.id2, data.params.k, data.params.lambda, tfidf, topicos);
                data.resultado = res;
                $rootScope.fechaDia1 = contador[0].fecha;
                $rootScope.fechaDia2 = contador[1].fecha;

                if (res.M)
                    return $state.go("grafico");
                alert("No se ha obtenido la informacion correcta")
                
            } catch (e) { console.log(e); alert(`Error: ${e}`) }
            finally { console.log('time', time()) }             
        }

        fetch(`https://fercarvo.github.io/apps/integradora/DB/corpus.json`)
        .then(async (data) => {
            if (data.ok) {
                data = JSON.parse(await data.text()).filter(c => c.compressed);
                data.forEach(c => c.check = false )

                $scope.data = data
                $scope.$apply()
            }
        }).catch(e => console.log('Error corpus.json', e))

    }])
    .controller('grafico', ["$scope", "$state", "data", '$rootScope', function ($scope, $state, data, $rootScope) {
        
        if (data.resultado === null) {
            alert("No existe informacion para mostrar!");
            return $state.go('corpus');
        }

        $scope.matrix = function() { $state.go('grafico.matrix') }

        //waitingDialog.hide()
        $state.go('grafico.matrix')
        var M = [...data.resultado.M]
        $scope.topicos_1 = data.resultado.topicos_1;
        $scope.topicos_2 = data.resultado.topicos_2; 

        $scope.obtenerFila = function(fila){
            data.grafico2 = {
                nombre: `EL tópico ${fila + 1} del día 2 se derivó de:`,
                data: M[fila]
            }
            $state.go('grafico.barras')
            if ($state.includes('grafico.barras'))
                $state.reload('grafico.barras')
        }

        $scope.obtenerColumna= function(index){
            var columna = M.reduce((col, fila)=> [...col, fila[index]] , [])
            data.grafico2 = {
                nombre: `El tópico ${index + 1} del día 1 derivó en:`,
                data: columna
            }
            $state.go('grafico.barras')
            if ($state.includes('grafico.barras'))
                $state.reload('grafico.barras')
        }
    }])
    .controller('grafico.matrix', ["$scope", "$state", "data", "$rootScope", function ($scope, $state, data, $rootScope){

        $rootScope.leyendaGrafico = "Mapa de calor de la matriz M por periodos"

        if (!data.resultado)
            return $state.go("dias")

        var M = [...data.resultado.M].reverse();
        var data_mapa = [];
        for (var i = 0; i < M.length; i++)
            for (var j = 0; j < M[i].length; j++)
                data_mapa.push([i, j, Math.round( M[j][i] * 100000)/100000 ])          
        
        var topicosX = M.map((fila, i)=> `TP ${i+1}`);
        var topicosY = [...topicosX].reverse()

        Highcharts.chart('container', {
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 45,
                plotBorderWidth: 1
            },
            title: null,/*{
                text: 'Mapa de calor de la matriz M por periodos'
            }*/
            xAxis: { categories: topicosX },
            yAxis: { categories: topicosY },
            colorAxis: {
                min: 0,
                max: 1,
                minColor: '#FFFFFF',
                maxColor: Highcharts.getOptions().colors[0]
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            },
            tooltip: {
                formatter: function () {
                    return `<b> ${this.series.xAxis.categories[this.point.x]} </b> del periodo 1, se relaciona en <br><b> ${this.point.value} </b> con <b> ${this.series.yAxis.categories[this.point.y]} </b> del periodo 2`;
                }
            },
            series: [{
                name: 'Sales per employee',
                borderWidth: 1,
                data: data_mapa,
                dataLabels: {
                    enabled: true,
                    color: '#000000'
                }
            }]
        })
    }])
    .controller('grafico.barras', ["$scope", "$state", "data", "$rootScope", function ($scope, $state, data, $rootScope){
        $rootScope.leyendaGrafico = data.grafico2.nombre
        //$scope.leyenda = data.grafico2.nombre
        $scope.$on('change-grafico', function() { $state.reload(), console.log('reloading...') })

        $scope.options = {
            chart: {
                //yDomain: [0, 1.1],
                type: 'discreteBarChart',
                height: 380,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: d => d.label,
                y: d => d.value,
                showValues: true,
                valueFormat: d => d3.format(',.4f')(d),
                duration: 500,
                xAxis: {
                    axisLabel: 'Topicos relacionados'
                },
                yAxis: {
                    axisLabel: 'Grado de relación',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data = [{
            key: data.grafico2.nombre,
            values: []
        }]

        data.grafico2.data.map(val => (val > 0.5) ? val: 0).forEach((value, i) => {
            $scope.data[0].values.push({label: `TP ${i+1}`, value})
        })

        if (data.grafico2.data.every(val => val <= 1))
            $scope.options.chart.yDomain = [0,1]
        else
            $scope.options.chart.yDomain = [0,1.1]

    }])
    .controller("home", [function () {

    }])
    .controller('documento', [function(){

    }])
    /*.controller('listener', ["$scope", "$state", function($scope, $state){
        console.log("Este controlador funciona solo con conexiones localhost")
        var socket_tweets = io.connect('http://localhost:3002', {'forceNew':true }); //tweets
        $scope.tweets = [];
        socket_tweets.on('tweet', function (tweet) {
            if ($scope.tweets.length >= 25)
                $scope.tweets.pop();
            $scope.tweets = [tweet, ...$scope.tweets];
            $scope.$apply()
        })
        $scope.$on('$destroy', ()=>  socket_tweets.close())
    }])*/
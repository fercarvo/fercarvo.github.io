function cleaner(string) {
	const stopwords = [ "rt", "a", "actualmente","acuerdo","adelante","ademas","además","adrede","afirmó","agregó","ahi","ahora","ahí","al","algo","alguna","algunas","alguno","algunos","algún","alli","allí","alrededor","ambos","ampleamos","antano","antaño","ante","anterior","antes","apenas","aproximadamente","aquel","aquella","aquellas","aquello","aquellos","aqui","aquél","aquélla","aquéllas","aquéllos","aquí","arriba","arribaabajo","aseguró","asi","así","atras","aun","aunque","ayer","añadió","aún","b","bajo","bastante","bien","breve","buen","buena","buenas","bueno","buenos","c","cada","casi","cerca","cierta","ciertas","cierto","ciertos","cinco","claro","comentó","como","con","conmigo","conocer","conseguimos","conseguir","considera","consideró","consigo","consigue","consiguen","consigues","contigo","contra","cosas","creo","cual","cuales","cualquier","cuando","cuanta","cuantas","cuanto","cuantos","cuatro","cuenta","cuál","cuáles","cuándo","cuánta","cuántas","cuánto","cuántos","cómo","d","da","dado","dan","dar","de","debajo","debe","deben","debido","decir","dejó","del","delante","demasiado","demás","dentro","deprisa","desde","despacio","despues","después","detras","detrás","dia","dias","dice","dicen","dicho","dieron","diferente","diferentes","dijeron","dijo","dio","donde","dos","durante","día","días","dónde","e","ejemplo","el","ella","ellas","ello","ellos","embargo","empleais","emplean","emplear","empleas","empleo","en","encima","encuentra","enfrente","enseguida","entonces","entre","era","eramos","eran","eras","eres","es","esa","esas","ese","eso","esos","esta","estaba","estaban","estado","estados","estais","estamos","estan","estar","estará","estas","este","esto","estos","estoy","estuvo","está","están","ex","excepto","existe","existen","explicó","expresó","f","fin","final","fue","fuera","fueron","fui","fuimos","g","general","gran","grandes","gueno","h","ha","haber","habia","habla","hablan","habrá","había","habían","hace","haceis","hacemos","hacen","hacer","hacerlo","haces","hacia","haciendo","hago","han","hasta","hay","haya","he","hecho","hemos","hicieron","hizo","horas","hoy","hubo","i","igual","incluso","indicó","informo","informó","intenta","intentais","intentamos","intentan","intentar","intentas","intento","ir","j","junto","k","l","la","lado","largo","las","le","lejos","les","llegó","lleva","llevar","lo","los","luego","lugar","m","mal","manera","manifestó","mas","mayor","me","mediante","medio","mejor","mencionó","menos","menudo","mi","mia","mias","mientras","mio","mios","mis","misma","mismas","mismo","mismos","modo","momento","mucha","muchas","mucho","muchos","muy","más","mí","mía","mías","mío","míos","n","nada","nadie","ni","ninguna","ningunas","ninguno","ningunos","ningún","no","nos","nosotras","nosotros","nuestra","nuestras","nuestro","nuestros","nueva","nuevas","nuevo","nuevos","nunca","o","ocho","os","otra","otras","otro","otros","p","pais","para","parece","parte","partir","pasada","pasado","paìs","peor","pero","pesar","poca","pocas","poco","pocos","podeis","podemos","poder","podria","podriais","podriamos","podrian","podrias","podrá","podrán","podría","podrían","poner","por","porque","posible","primer","primera","primero","primeros","principalmente","pronto","propia","propias","propio","propios","proximo","próximo","próximos","pudo","pueda","puede","pueden","puedo","pues","q","qeu","que","quedó","queremos","quien","quienes","quiere","quiza","quizas","quizá","quizás","quién","quiénes","qué","r","raras","realizado","realizar","realizó","repente","respecto","s","sabe","sabeis","sabemos","saben","saber","sabes","salvo","se","sea","sean","segun","segunda","segundo","según","seis","ser","sera","será","serán","sería","señaló","si","sido","siempre","siendo","siete","sigue","siguiente","sin","sino","sobre","sois","sola","solamente","solas","solo","solos","somos","son","soy","soyos","su","supuesto","sus","suya","suyas","suyo","sé","sí","sólo","t","tal","tambien","también","tampoco","tan","tanto","tarde","te","temprano","tendrá","tendrán","teneis","tenemos","tener","tenga","tengo","tenido","tenía","tercera","ti","tiempo","tiene","tienen","toda","todas","todavia","todavía","todo","todos","total","trabaja","trabajais","trabajamos","trabajan","trabajar","trabajas","trabajo","tras","trata","través","tres","tu","tus","tuvo","tuya","tuyas","tuyo","tuyos","tú","u","ultimo","un","una","unas","uno","unos","usa","usais","usamos","usan","usar","usas","uso","usted","ustedes","v","va","vais","valor","vamos","van","varias","varios","vaya","veces","ver","verdad","verdadera","verdadero","vez","vosotras","vosotros","voy","vuestra","vuestras","vuestro","vuestros","w","x","y","ya","yo","z","él","ésa","ésas","ése","ésos","ésta","éstas","éste","éstos","última","últimas", "último", "últimos",
		"a's", //english from here
		"able","about","above","according","accordingly","across","actually","after","afterwards","again","against","ain't","all","allow","allows","almost","alone","along","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren't","around","as","aside","ask","asking","associated","at","available","away","awfully","b","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","c","c'mon","c's","came","can","can't","cannot","cant","cause","causes","certain","certainly","changes","clearly","co","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn't","course","currently","d","definitely","described","despite","did","didn't","different","do","does","doesn't","doing","don't","done","down","downwards","during","e","each","edu","eg","eight","either","else","elsewhere","enough","entirely","especially","et","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","far","few","fifth","first","five","followed","following","follows","for","former","formerly","forth","four","from","further","furthermore","g","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","h","had","hadn't","happens","hardly","has","hasn't","have","haven't","having","he","he's","hello","help","hence","her","here","here's","hereafter","hereby","herein","hereupon","hers","herself","hi","him","himself","his","hither","hopefully","how","howbeit","however","i","i'd","i'll","i'm","i've","ie","if","ignored","immediate","in","inasmuch","inc","indeed","indicate","indicated","indicates","inner","insofar","instead","into","inward","is","isn't","it","it'd","it'll","it's","its","itself","j","just","k","keep","keeps","kept","know","known","knows","l","last","lately","later","latter","latterly","least","less","lest","let","let's","like","liked","likely","little","look","looking","looks","ltd","m","mainly","many","may","maybe","me","mean","meanwhile","merely","might","more","moreover","most","mostly","much","must","my","myself","n","name","namely","nd","near","nearly","necessary","need","needs","neither","never","nevertheless","new","next","nine","no","nobody","non","none","noone","nor","normally","not","nothing","novel","now","nowhere","o","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","only","onto","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","p","particular","particularly","per","perhaps","placed","please","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rather","rd","re","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","she","should","shouldn't","since","six","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","t","t's","take","taken","tell","tends","th","than","thank","thanks","thanx","that","that's","thats","the","their","theirs","them","themselves","then","thence","there","there's","thereafter","thereby","therefore","therein","theres","thereupon","these","they","they'd","they'll","they're","they've","think","third","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","to","together","too","took","toward","towards","tried","tries","truly","try","trying","twice","two","u","un","under","unfortunately","unless","unlikely","until","unto","up","upon","us","use","used","useful","uses","using","usually","uucp","v","value","various","very","via","viz","vs","w","want","wants","was","wasn't","way","we","we'd","we'll","we're","we've","welcome","well","went","were","weren't","what","what's","whatever","when","whence","whenever","where","where's","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","who's","whoever","whole","whom","whose","why","will","willing","wish","with","within","without","won't","wonder","would","wouldn't","x","y","yes","yet","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves", "z","zero"
	]

	if (!string || string.length<=10)
		return [];

	try {
		string = string.toLowerCase(); //todo a minusculas
		string = string.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '') //Se elimina URLs
		string = string.replace(/\B@[a-z0-9_-]+/gi, "") //Se elimina las menciones, no solo el @, todo
		string = quitarAcentos(string)
		var array = string.match(/\b(\w+)\b/g) //Se convierte string a array de palabras
		array = array.filter(word => filterCheck(word))
		//array = snowball.stemword(array, 'spanish') //Se realiza el stemming

		if (array.length <= 4)
			return []
		
		if (array instanceof Array)
			return array
		return []

	} catch (error) {
		return []
	}	

	//Verifica si una palabra tiene 3 o mas letras continuas repetidas
	function filterCheck (word) {
		if (word.length <=2 || word.length>=21) //Si es menor de dos letras o igual o mayor a 21
			return false;
		if (/\d/.test(word)) //Si la palabra tiene un numero
			return false;
		if (word.includes("jaja") || word.includes("jeje") || word.includes("jiji")) //Si incluye estos strings
			return false;
		for (var i = 0; i < word.length; i++) //Verifica por caracters repetidos contnuos
	        if (word[i]===word[i+1] && word[i+1]===word[i+2]) 
	            return false

		if (stopwords.indexOf(word) > -1) //Si la palabra esta dentro de stopwords
			return false;
		return true 	
	}

	function quitarAcentos(cadena) {
		var removalMap = [
	        {base:'A', letters:'\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},
	        {base:'AA',letters:'\uA732'},
	        {base:'AE',letters:'\u00C6\u01FC\u01E2'},
	        {base:'AO',letters:'\uA734'},
	        {base:'AU',letters:'\uA736'},
	        {base:'AV',letters:'\uA738\uA73A'},
	        {base:'AY',letters:'\uA73C'},
	        {base:'E', letters:'\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},
	        {base:'I', letters:'\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},
	        {base:'O', letters:'\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'},
	        {base:'OI',letters:'\u01A2'},
	        {base:'OO',letters:'\uA74E'},
	        {base:'OU',letters:'\u0222'},
	        {base:'OE',letters:'\u008C\u0152'},       
	        {base:'U', letters:'\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},
	        {base:'a', letters:'\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'},
	        {base:'aa',letters:'\uA733'},
	        {base:'ae',letters:'\u00E6\u01FD\u01E3'},
	        {base:'ao',letters:'\uA735'},
	        {base:'au',letters:'\uA737'},
	        {base:'av',letters:'\uA739\uA73B'},
	        {base:'ay',letters:'\uA73D'},
	        {base:'e', letters:'\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},
	        {base:'i', letters:'\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},
	        {base:'o', letters:'\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'},
	        {base:'oi',letters:'\u01A3'},
	        {base:'ou',letters:'\u0223'},
	        {base:'oo',letters:'\uA74F'},
	        {base:'oe',letters:'\u009C\u0153'},
	        {base:'u',letters: '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'}
	    ]

	    var map = new Map()

	    for (obj of removalMap)
	    	for (letter of obj.letters)
	    		map.set(letter, obj.base)

	    return cadena.replace(/[^\u0000-\u007E]/g, a => map.get(a) || a)
	}	
}

function cleanM(matrix) {
	return matrix.map(fila => fila.map(y => (typeof y === 'number') && !isNaN(y) ? y : 0.000000001) )
}

function JPP (X, R, k, alpha, lambda, epsilon, maxiter, Matrix){

	var dot = (A, B) => Matrix.dot(A, B)

	var ComputeLoss = (X, W, H, M, R, reg_norm, reg_temp, trXX, I) => {
		var WtW = dot(W.T, W)
		var MR = dot(M, R)
		var WH = dot(W, H)
		var WMR = dot(W, MR)

		var tr1 = trXX - (2*tr(X, WH)) + (tr(WH, WH))
		var tr2 = trXX - (2*tr(X,WMR)) + (tr(WMR, WMR))
		var tr3 = reg_temp * ( tr(M,M) - (2 * M.diag.sum) + (I.diag.sum) )
		var tr4 = reg_norm * (H.sum + W.sum + M.sum)
		var Obj = tr1 + tr2 + tr3 + tr4

		return Obj
	}

	var maxMatlab = (matrix, num) => matrix.eval(cel => (num > cel) ? num : cel);
	var tr = (A, B) => A.multiply(B).sum;

	X = new Matrix( cleanM(X) )
	R = new Matrix( cleanM(R) )

	var n = X.rows // # filas X
	var v1 = X.columns // # columnas X
	var W = Matrix.random(n, k) //Matriz aleatoria de n x k
	//var H = nj.random([k,v1]) //Matriz aleatoria de k x v1
	var H = R
	var M = Matrix.random(k,k) //Matriz aleatoria de k x k
	var I = Matrix.identity(k) //Matriz identidad k x k
	var Ilambda = I.eval(n => n*lambda)
	var trXX = tr(X, X) //..

	//iteration counters
	var itNum = 1
	var Obj = 10000000
	var eps = 2^(-52)
	var prevObj = 2*Obj
	var J
	var W_1, W_2, W_3, W_4
	var WtW, WtX
	var M_1, M_2, M_3, M_4, M_5
	var H_1, H_2
	var delta


	while ((Math.abs(prevObj-Obj) > epsilon) && (itNum <= maxiter)) {
		J = Matrix.dot(M, R) // Multiplicacion matricial

		//W =  W .* ( M_1  ./ max(W*(M_2),eps) ); % eps = 2^(-52)
		//console.log("dot to go", X, H.T.add(J.T))
		W_1 = Matrix.dot(X, H.T.add(J.T))//X*(H'+J')
		//console.log("\n...asdasdasdasdasd....W_1", W_1.data, "\n\n")
		W_2 = ( ( Matrix.dot(J, J.T)).add( Matrix.dot(H, H.T)) ).add(lambda)   //((J*J')+(H*H')+ lambda) //
		//console.log("W", W)
		//console.log("\n...asdasdasdasdasd....W_2", W_2, "\n\n")

		W_3 = Matrix.dot(W, W_2)
		//console.log("\n...asdasdasdasdasd....W_3", W_3, "\n\n")
		W_4 = maxMatlab(W_3, eps) //////////////////////////////////////////
		//console.log("\n...asdasdasdasdasd....W_4", W_4, "\n\n")
		W = W.multiply( W_1.divide( W_4 ))

		WtW = Matrix.dot( W.T , W)//W'*W
		WtX = Matrix.dot( W.T, X) //W'*X;

		//M = M .* ( ((WtX*R') + (alpha*I)) ./ max( (WtW*M*R*R') + ( (alpha)*M)+lambda,eps) );
		M_1 = ( dot(WtX, R.T) ).add( I.multiply(alpha))   //(WtX*R') + (alpha*I)
		M_2 = dot( dot( dot(WtW, M) , R) , R.T) //(WtW*M*R*R')
		M_3 = ( M.multiply(alpha) ).add(lambda)  //( (alpha)*M) + lambda
		M_4 = M_2.add(M_3)// (WtW*M*R*R') + ( (alpha)*M) + lambda
		M_5 = maxMatlab(M_4, eps)
		M = M.multiply( M_1.divide(M_5)) //M_1 ./ M_5

		//H = H .* (WtX./max(WtW*H+lambda,eps));
		H_1 = ( dot(WtW, H)).add(lambda)//WtW*H+lambda
		H_2 = maxMatlab(H_1, eps)
		H = H.multiply( WtX.divide(H_2) ) //H .* (WtX./max(H_1,eps));

		prevObj = Obj
		Obj = ComputeLoss(X,W,H,M,R,lambda,alpha, trXX, I)

		delta = Math.abs(prevObj-Obj) //delta = abs(prevObj-Obj);

		itNum++
	}

	return { 
		W: W.data,
		H: H.data,
		M: M.data 
	}

	//Verifica que una matriz no tenga valores diferentes de numeros
	function cleanM(matrix) {
		return matrix.map(fila => fila.map(y => (typeof y === 'number') && !isNaN(y) ? y : 0.000000001) )
	}	
}


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

    static dot (M, N) {
	    var result = [];
	    for (var i = 0; i < M.rows; i++) {
	        result[i] = [];
	        for (var j = 0; j < N.columns; j++) {
	            var sum = 0;
	            for (var k = 0; k < M.columns; k++) {
	            	sum += M.data[i][k] * N.data[k][j]
	            }
	            result[i][j] = sum;
	        }
	    }
	    return new Matrix(result)
    }

    /*static dot(a, b) {
		var aNumRows = a.rows, aNumCols = a.columns,
			bNumRows = b.rows, bNumCols = b.rows,
			m = new Array(aNumRows);  // initialize array of rows
		for (var r = 0; r < aNumRows; ++r) {
			m[r] = new Array(bNumCols); // initialize the current row
			for (var c = 0; c < bNumCols; ++c) {
				m[r][c] = 0;             // initialize the current cell
				for (var i = 0; i < aNumCols; ++i) {
					m[r][c] += a.data[r][i] * b.data[i][c];
				}
			}
		}
		console.log("0 0 ", m[0][0])
		return new Matrix(m);
	}*/


    /*static dot (A, B, flag) {
    	var cont = 0
        var result = new Array(A.rows);
        for (var r = 0; r < A.rows; r++) {
            result[r] = new Array(B.columns).fill(0)
            for (var c = 0; c < B.columns; c++) {
                for (var i = 0; i < A.columns; i++) {
                    result[r][c] += A.data[r][i] * B.data[i][c];
                    if (r === 0 && c === 0 && flag) {
                    	if ( (cont%1000) === 0 )
                    		console.log(result[r][c], r, c,cont);
                    	cont++
                	}              
                }
            }
        }
        console.log("result 0 0", result[0][0])
        return new Matrix(result)
    }*/

    static random (n, m) {
        var matrix = new Array(n).fill( new Array(m).fill(0) )
        var result = matrix.map(fila => fila.map(z => Math.random() ))
        return new Matrix(result)
    }

    static identity (size) {
        var matrix = new Array(size).fill( new Array(size).fill(0) )
        for (var i = 0; i < size; i++)
        	matrix[i][i] = 1;

        var result = new Matrix(null, 'empty')
        result.data = matrix
        result.rows = size
        result.columns = size
        return result
    }

    subtract (B) {
    	if (typeof B === 'number')
    		return this.eval(val => val-B);

    	if (!(B instanceof Matrix))
    		B = new Matrix(B);
        var result = this.data.map((fila, i) => fila.map((elm, j) => elm - B.data[i][j]))
        return new Matrix(result)
    }

    add (B) {
    	if (typeof B === 'number')
    		return this.eval(val => val+B);

    	if (!(B instanceof Matrix))
    		B = new Matrix(B);
        var result = this.data.map((fila, i) => fila.map((elm, j) => elm + B.data[i][j]))
        return new Matrix(result)
    }

    multiply (B) {
    	if (typeof B === 'number')
    		return this.eval(val => val*B);

    	if (!(B instanceof Matrix))
    		B = new Matrix(B);
    	var result = this.data.map((fila, i) => fila.map((elm, j) => elm * B.data[i][j]))
    	return new Matrix(result)
    }

    divide (B) {
    	if (typeof B === 'number')
    		return this.eval(val => val/B);

    	if (!(B instanceof Matrix))
    		B = new Matrix(B);
    	var result = this.data.map((fila, i) => fila.map((elm, j) => elm / B.data[i][j]))
    	return new Matrix(result)
    }

    eval (fn) {
    	var result = this.data.map(fila => fila.map(val => fn(val)))
        return new Matrix(result)
    }

    get T () {
    	var result = this.data[0].map((x,i)=> this.data.map(x => x[i])) 
    	return new Matrix(result)
    }

    get sum () {
    	return this.data.reduce((total, row) => {
    		return row.reduce((sum, val) => sum + val, 0)
    	}, 0)
    }

    get diag() {
    	var result = []
    	var iter = (this.rows <= this.columns) ? this.rows : this.columns;
    	for (var i = 0; i < iter; i++)
			result.push(this.data[i][i]);

		return new Matrix([result])
    }
}


function cp_tfidf (data) {
	var X = data.setPalabras.reduce((arr, word) => [...arr, tf_idf2(data.corpus, word)], []);

	return X;

	// corpus = [{word: frecuency}]
	function tf_idf (corpus, word) {	
		var tf = (doc, word) => Math.log(1 + (doc.map[word]|| 0) )
		var nt = corpus.reduce((nt, doc)=> doc.map[word] ? ++nt : nt ,1)
		var idf = Math.log(1 + (corpus.length / nt))

		return corpus.reduce((xT, doc) => [...xT, tf(doc, word)*idf], [])
	}

	function tf_idf2 (corpus, word) {
		var tf = (doc, word) => 0.5 + ((0.5*(doc.map[word] ? doc.map[word] : 0))/doc.values);
		var nt = corpus.reduce((nt, doc)=> doc.map[word] ? ++nt : nt ,1)
		var idf = Math.log(1 + (corpus.length / nt))
		return corpus.reduce((xT, doc) => [...xT, tf(doc, word)*idf], [])
	}
}

function cp_corpus(documentos, cleaner) {
	var corpus = [] // [Map] new Map("word", frecuency)
	var setPalabras = new Set() //Palabras sin repetir del corpus

	documentos.forEach(doc =>{
		var valuesDoc = new Set()
		var map = {}
		var docWords = doc.tweets.reduce((words, t) => [...words, ...cleaner(t) ], []) //Todas las palabras del doc

		docWords.forEach(word => {
			if (word in map)
				map[word]++
			else
				map[word] = 1
		})

		for (var key in map) {
			setPalabras.add(key);
			valuesDoc.add(map[key])
		}

		corpus.push({map, values: [...valuesDoc].sort().pop()})
	})
	setPalabras = [...setPalabras]
	return {setPalabras, corpus}		
}

async function getCorpus(id) {
	var data = await fetch(`https://fercarvo.github.io/apps/integradora/DB/corpus/${id}.json`)

	if (data.ok)
		data = await data.text();
	else
		throw {status: data.status, statusText: data.statusText};

	return JSON.parse(data)
}

async function getJPP(corpus1, corpus2, k = 5, lambda = 0.01) {
	var arr_data = await Promise.all( [getX(corpus1),  getX(corpus2)] )

	var data_1 = arr_data[0]
	var data_2 = arr_data[1] //X_2 [{map, values}, {map, values}]
	var alpha = 0.1
    var epsilon = 0.01
    var maxiter = 100

    var setPalabras = [...new Set([...data_1.setPalabras, ...data_2.setPalabras]) ]

	var X_1 = []
	var X_2 = []

	var p1 = new GenericWebWorker({setPalabras, corpus: data_1.corpus}, cp_tfidf, Matrix)
		.exec((data, tfidf, Matrix) => {
			var X = tfidf(data);
			return new Matrix(X).T.data
		});

	var p2 = new GenericWebWorker({setPalabras, corpus: data_2.corpus}, cp_tfidf, Matrix)
		.exec((data, tfidf, Matrix) => {
			var X = tfidf(data);
			return new Matrix(X).T.data
		});

	try {
		var X = await Promise.all([p1, p2])

		var worker = new GenericWebWorker(k, alpha, lambda, epsilon, maxiter, X[0], X[1], JPP, Matrix, extraerDocTopicos, cleanM, data_1, data_2)
		var data = await worker.exec((k, alpha, lambda, epsilon, maxiter, X_1, X_2, JPP, Matrix, extraerDocTopicos, cleanM, data_1, data_2) => {
			var r_1 = Matrix.random(k, X_1[0].length ).data
			var jpp_1 = JPP(X_1, r_1, k, alpha, lambda, epsilon, maxiter, Matrix)

			console.log("jpp1", jpp_1)

			var jpp_2 = JPP(X_2, jpp_1.H, k, alpha, lambda, epsilon, maxiter, Matrix)

			console.log("jpp_2", jpp_2)

			var topicos_1 = extraerDocTopicos( cleanM( jpp_1.W ), data_1.corpus, Matrix)
			console.log("Topico 1")
			var topicos_2 = extraerDocTopicos( cleanM( jpp_2.W ), data_2.corpus, Matrix)
			var result = {M: jpp_2.M, topicos_1, topicos_2};
			console.log("result", result)
			return result
		})

		console.log("Data after worker", data)

		return data
	} catch (e) {
		console.log("Error en JPP", e)
	}

	//Extrae los terminos con mayor tfidf de cada tópico
	function extraerTopicos (H, setPalabras) { //de H
		return H.map(function (topico){
			topico = topico.map((val, i) => {return {val, word: setPalabras[i]} })
			topico.sort((a, b) => b.val - a.val)
			return topico.slice(0, 10).map(item => item.word)
		})
	}

	//De cada tópico, elige los 10 mejores documentos y extrae sus palabras con mayor frecuencia.
	function extraerDocTopicos (W, corpus, Matrix) {

		function findIndicesOfMax(arr, count) {
			var new_arr = arr.map((val, index)=> { return {val, index} })
			new_arr.sort((a,b)=> b.val-a.val)
			return new_arr.slice(0, count).map(it => it.index)
		}

		var to_doc = new Matrix(W).T.data //Topico x Doc
		to_doc = to_doc.map(t => findIndicesOfMax(t, 10)) //n mejores documentos

		return to_doc.map(topico => {
			topico = topico.map(index_doc => corpus[index_doc].map)
			topico = topico.map(doc => {
				doc = Object.entries(doc).sort((a, b)=> b[1]-a[1]) //[ ['perro', 233], ['gato', 9] ]
				return doc.slice(0, 7).map(obj => obj[0]) //['perro', 'gato', 'caballo']
			})
			topico = topico.reduce((arr, doc_arr)=> [...arr, ...doc_arr], [])
			return [...new Set(topico)].slice(0, 7)
		})
	}
}

async function getX(corpus_id) {
	var documentos = await getCorpus(corpus_id);
	var worker = new GenericWebWorker(documentos, cp_corpus, cleaner)
	var data = await worker.exec((documentos, cp_corpus, cleaner) => {
		return cp_corpus(documentos, cleaner)
	})

	return data
}
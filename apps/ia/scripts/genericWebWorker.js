/**
* GenericWebWorker v2.1
* 
* A Generic Javascript WebWorker that allows the user to execute and pass functions
* Is Fileless, for what the user does not need a file.js to request
*
* @author, Edgar Fernando Carvajal Ulloa <efcu93@gmail.com>, <efcarvaj@espol.edu.ec>
* {@link https://github.com/fercarvo/GenericWebWorker}
*/
class GenericWebWorker {
    /**
    * @param {any} data, Any kind of arguments that will be used in the callback, functions too
    */
    constructor(...ags) {
        this.args = ags.map(a => (typeof a == 'function') ? {type:'fn', fn:a.toString()} : a)
    }

    //@param {function} cb, To be executed, the params must be the same number of passed in the constructor 
    async exec(cb) {
        if (typeof cb !== 'function')
            throw new Error(`${cb} not a function`);
        
        var wk_string = this.worker.toString();
        wk_string = wk_string.substring(wk_string.indexOf('{') + 1, wk_string.lastIndexOf('}'));            
        var wk_link = window.URL.createObjectURL( new Blob([ wk_string ]) );
        var wk = new Worker(wk_link);

        wk.postMessage({ callback: cb.toString(), args: this.args });
 
        var res = await new Promise((next, error) => {
            wk.onmessage = e => (e.data && e.data.error) ? error(e.data.error) : next(e.data);
            wk.onerror = e => error(e.message);        
        }).finally(()=> { wk.terminate(), window.URL.revokeObjectURL(wk_link) })

        return res
    }

    //@param {function} cb, To be executed, the 1st argument is each element of the array
    async parallel(arr, cb) {
        var res = [...arr].map(it => new GenericWebWorker(it, ...this.args).exec(cb))
        return await Promise.all(res)
    }

    worker() {
        onmessage = async function (e) {
            try {                
                var cb = new Function(`return ${e.data.callback}`)();
                var args = e.data.args.map(p => (p.type == 'fn') ? new Function(`return ${p.fn}`)() : p);

                try {
                    var result = await cb(...args);//.apply(this, args); //If it is a promise or async function
                    return postMessage(result)

                } catch (e) { throw new Error(`CallbackError: ${e}`) }
            } catch (e) { postMessage({error: e.message}) }
        }
    }
}
const process = require('process')

const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

const operacion = process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

if (operacion === 'sumar'){
    console.log(sumar(a, b));
}else if(operacion === 'restar'){
    console.log(restar(a, b));
}else if(operacion === 'multiplicar'){
    console.log(multiplicar(a, b));
}else if(operacion === 'dividir'){
    console.log(dividir(a, b));
}else{
    console.log(`La operación ingresada no es válida, por favor ingrese una de las siguiente operaciones. \n-sumar\n-restar\n-multiplicar\n-dividir` )
}
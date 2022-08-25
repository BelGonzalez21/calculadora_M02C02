function sumar(a, b){
    if(a === undefined || b === undefined){
        return 'Por favor, use dos números para sumar.';
    }else if(isNaN(a) || isNaN(b)){
        return 'Por favor, solo ingrese números.';
    }return parseInt(a) + parseInt(b);
};

module.exports = sumar;

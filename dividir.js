function dividir(a, b){
    if(a === 0 || b === 0){
        return "No se puede dividir por 0.";
    }else if(a === undefined || b === undefined){
        return 'Por favor, use dos números para dividir.';
    }else if(isNaN(a) || isNaN(b)){
        return 'Por favor, solo ingrese números.';
    }return parseInt(a) / parseInt(b);
};

module.exports = dividir;
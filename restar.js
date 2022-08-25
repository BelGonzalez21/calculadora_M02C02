function restar(a, b){
    if(a === undefined || b === undefined){
        return 'Por favor, use dos números para restar.';
    }else if(isNaN(a) || isNaN(b)){
        return 'Por favor, solo ingrese números.';
    }return parseInt(a) - parseInt(b);
}; 

module.exports = restar;
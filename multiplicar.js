// function multiplicar(a, b){
//     if(a || b === 0){
//         return 0;
//     }
//     return a * b;
// };




function multiplicar(a, b){
    if(a === 0 || b === 0){
        return 0;
    }else if(a === undefined || b === undefined){
        return 'Por favor, use dos números para multiplicar.';
    }else if(isNaN(a) || isNaN(b)){
        return 'Por favor, solo ingrese números.';
    }return parseInt(a) * parseInt(b);
}; 

module.exports = multiplicar;
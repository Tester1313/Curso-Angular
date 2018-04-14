// ES5
var dobroDoValor = function(numero) {
    return numero * 2;
}


//ES6 
//Arrow functions caso nenhum parametro ou mais de 1 paramentros
// deve-se utilizar o (numero,numero2) ou () nos parametros
var dobroDovalor2 = numero => {
    let resultado = numero *2
    return resultado
}  
console.log(dobroDovalor2(5))
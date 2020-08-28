//IMPERATIVA
 const numeros = [1,2,3,4];
let double = [];

for (let i = 0; i < numeros.length; i++) {
    double.push(numeros[i]*2)
}
console.log(double) 

//PROGRAMACIÓN FUNCIONAL

const numeros = [1,2,3,4];
const double = numeros.map(n => n*2);

console.log(double) 

//FUNCIÓN PURA

 function multiplicar(numero) {
    return numero*5;
}
let resultado = multiplicar(5);

console.log(resultado);

// F.Pura

let totalCompra=0;

function sumarPrecios(cantidad, valor) {
    return totalCompra = totalCompra + cantidad*valor;
}
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100)); 

//COMPOSICIÓN FUNCIONAL

 function multiplicar(num) {
    return num*num
}
 function suma(num1, num2) {
     return multiplicar(num1) + multiplicar(num2)
 }

console.log(suma(4,5)) 

// funciones recursivas

 function saludar() {
    console.log('hola mundo, hola chicos');
    saludar();
}
saludar(); 

// 
const listaNumeros = [2,4,6,8,10];
const nuevaLista = [];

for (numero in listaNumeros) {
   console.log(listaNumeros[numero])
   nuevaLista.push(listaNumeros[numero]*2)
    
}

console.log(nuevaLista) 

// transformación a recursiva 
const listaNumeros = [2,4,6,8,10];
function duplicar(lista) {
    if (lista[0] == 2 ) return console.log([[0]*2])
    else
    return duplicar([listaNueva[1]*2]);
          
}
    duplicar(listaNumeros);
  

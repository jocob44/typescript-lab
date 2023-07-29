//**********TypeScript**********
//Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010; //CORRECTO
let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xff; //CORRECTO
console.log(primerHexa);
let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido parsea hasta donde es válido pero no es un comportamiento seguro

console.log(segundoHexa);

let primerHexa2 = 0xfff;
console.log(primerHexa2); // 4095

let primerBinario2 = 0b1010;
console.log(primerBinario); // 10

let myNumber: number = 20; // Buena practica.
let otherNumber: Number = 20; // Mala practica.

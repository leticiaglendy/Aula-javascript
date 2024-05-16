//declaração de variaveis

var x = 7;
let y = 5;
const z = 10;


 let res = x + y + z;

console.log(z);

let soma = x + y + z;
console.log(soma);

console.log("O valor de " + res);

// vantagem do let, posso usar dentro e fora do escopo de variavel sendo local e global

if(true){
    var a = 20;
    console.log(a);

}
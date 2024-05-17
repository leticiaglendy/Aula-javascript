var x = parseFloat(prompt("Escolha uma operação de 1 a 4: "));
var num1 = 10;
var num2 = 10;

//função somar
function somar() {
    resultado = num1 + num2;
    console.log(resultado)
}

//função subtrair
function sub() {
    resultado = num1 - num2;
    console.log(resultado)
}

//função dividir
function div() {
    resultado = num1 / num2;
    console.log(resultado)
}

//função multiplicar
function mult() {
    resultado = num1 * num2;
    console.log(resultado)
}

/*
chamando as funções sem argumentos

somar();
sub();
div();
mult();
*/

if (x == 1) {
    somar();
}else if (x == 2) {
    sub();
}else if (x == 3) {
    div();
}else if (x == 4) {
    mult();
}else if (x > 4) {
    console.log("Esta operação não existe!")
}
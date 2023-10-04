//Sintaxe de Arrow Function: Arrow functions, introduzidas no ES6 (ECMAScript 2015), oferecem uma sintaxe mais concisa para definir funções em JavaScript. Elas consistem em uma seta (=>) que separa os parâmetros da função do corpo da função.

// var     //nome var      //parametro    //função
const apresentarArrow = nome => `meu nome é ${nome}`; //um parametro - nao precisa parenteses e nem chaves.

const soma = (num1, num2) => num1 + num2; //dois parametros usam parenteses //

//arrow com + de 1 linha de comando //
const somaNumerosPequenos = (num1, nume2) => {
 if (num1 > 10 || num2 > 10) {
 return 'Somente numeros de 1 a 9';
 } else{
 return num1 + num2;
 }
}
//Um Parâmetro sem Parênteses: Se a função tiver apenas um parâmetro, você pode omitir os parênteses em torno desse parâmetro, como você fez no exemplo apresentarArrow.

//Mais de Um Parâmetro: Se a função tiver mais de um parâmetro, você deve incluir parênteses em torno dos parâmetros, como no exemplo soma.

//Arrow Function com Múltiplas Linhas: Se o corpo da função tiver mais de uma linha de código, você deve usar chaves ({}) para delimitar o corpo da função, como no exemplo somaNumerosPequenos.

//Comportamento como Expressões: Arrow functions são expressões, o que significa que elas têm um valor de retorno implícito. Isso pode ser útil em situações em que você deseja retornar um valor em uma única linha de código, como nas funções apresentarArrow e soma.

//Hoisting: Arrow functions, assim como funções declarativas tradicionais, são içadas (hoisting) durante a fase de compilação do JavaScript. Isso significa que você pode usar uma arrow function antes de declará-la no código, desde que esteja dentro do mesmo escopo.


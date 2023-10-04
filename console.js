//console
//ferramenta usada no node e navegadores que mostra as frases e dados fora aplicação - não aparecendo p usuario//
const minhaVar = true;

console.log(245);
console.log('Eu sou um texto');
console.log(minhaVar); //antes de funcionar ela precisa existir//
//o console lê e exibe as informações das variaves.//

//console.error// codigo de erro pre definido// se usuario colocar certo dado pode gerar um erro//

console.error('deu erro');

console.log("deu erro");
console.error(new Error("deu erro"));

// a palavra-chave new seguida de Error com inicial maiúscula - é um gostinho de como trabalhamos com classes em JavaScript.//

//Entre os outros métodos, existem:

//console.error() para exibir mensagens de erro;
//console.table() para visualizar de forma mais organizada informações tabulares;
//console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
//console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
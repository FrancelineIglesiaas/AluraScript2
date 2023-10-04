//expressao//
//declaracao de funcao//
function minhaFuncao(param){
    //bloco de codigo//
    }
    minhaFuncao('param');
    
    //expressaoFuncao//
    
    const soma = function(num1, num2) {return num1 + num2}
    console.log(soma(1, 1));
    
    //nao temos o nome da função, criamos uma variavel e atribuimos uma função a ela//
    //boas praticas manter na mesma linha//
    
    //diferença principal!!! içar e levantar - hoistfing
    //funções e var sao listadas no topo do arquivo //
    console.log(apresentar());
    
    function apresentar(){
    return 'ola';
    }
    
    console.log(soma(1, 1)); 
    
    //erro referencia, nao consegue acessar soma, antes de iniciar//
    //exemplo:
    //const soma  function(num1, num2) {return num1 + num2} /

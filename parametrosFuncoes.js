//parametros e funções//

//sem parametro//
function soma() {
    return 2 + 2;
   }
   
   console.log(soma());
   
   //parametros de função//
                //informar parametro que ela vai receber
   function soma(num1, num2) {
    return num1 + num2; //num1 - num2 - parametros recebidos
   }
    console.log(soma(2, 2)); //declarar parametros ----//
    console.log(soma(2, 26));
    console.log(soma(35, 40)); 
   
   //parametros x argumentos // 
   //Mesma coisa// mesmo nome // == passar um valor para uma função - intercambiaveis//
   
   //ordem dos parametors//
   function nomeIdade(nome, idade) {
   return `Meu nome é ${nome} e minha idade é ${idade}`;
   }
   console.log(nomeIdade('Franceline', 36)); //obedecer a ordem //
   
   //multiplica//
   function multiplica(numero1, numero2) {
   return numero1 * numero2;
   }                          //num1  *   //num2  //resultado
   console.log(multiplica(soma((4, 5), soma(3, 3)))); //54
   
   //definir valor padrão para um parametro - na função adcionar no paramatro o sinal de  = e 1 (num1 = 1 - valor neutro da multiplicação.) // 
   //em uma mesma função pode ter varios parametos, mas a boa pratica são poucos argumentos//
   
   //Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado
   // para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.
   
   function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()
   
   //sem retorno com parametro//
   
   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')
   
   
   //com retorno sem parametro//
   
   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
   
   //A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. 
   //Quando isso acontecer, a função cumprimentar() será executada também, e seu valor de retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está //sendo chamada.
   
   //erros//
   //Como nenhum parâmetro foi passado, a saída do console será undefined.//
   
   function comParametro(param) {
       console.log(param)
   }
   comParametro()
   //Alternativa correta! Certo! Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.
//Varáveis

var altura;
let peso
console.log(altura); //-> Var é usado para definir varáveis, assim como o let
console.log(peso); //-> Majoritariamente, usa-se o let (var vem do javascript original e o let veio depois)
// let impede que outra variável com o mesmo nome seja criada (gera mensagem de erro), em contraste com o var (pode gerar problemas com a variável)


let  valor  =  170;
let  outrovalor  =  valor;
let  dado;
console.log(valor);  //  ->  170
console.log(outrovalor);  //  ->  170
dado  =  60;    
console.log(dado);  //  ->  60


let  segredo  =  180;
console.log(segredo);  //  ->  180
console.log("segredo");  //  ->  segredo


//use strict; deve ser usado no início do código

//valor = 20;
//console.log(valor);
//JS original permitiria isso, mas ao usar o "use strict" -> ele coloca o compilador para adotar a síntese moderna (que proíbe)

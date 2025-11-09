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


let ola = "Hello";
console.log(ola); //-> Hello
ola = 100;
console.log(ola); //->100

let greeting = 'Hello';
let counter = 100;
greeting = greeting + counter;
console.log(greeting); //-> Hello100

const  greet  =  "Hello!";
greet  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.

let  count;
console.log(count);  //  ->  undefined
{
         counter  =  1;
         console.log(count);  //  ->  1
}
counter  =  count  +  1;
console.log(count);  //  ->  2

let  heigh  =  180;
{
         let  weight  =  70;
         console.log(heigh);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(heigh);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined


let  heig  =  200;
{
         let  weigh  =  100;
         {
                 let  info  =  "tall";
                 console.log(heig);  //  ->  200
                 console.log(weigh);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(heig);  //  ->  200
         console.log(weigh);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }


var  hei  =  180;
{
         var  weig  =  70;
         console.log(hei);  //  ->  180
         console.log(weig);  //  ->  70	
}
console.log(hei);  //  ->  180
console.log(weig);  //  ->  70



function  testFunction()  {
         console.log("Hello");
         console.log("World");
}


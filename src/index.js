// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
//console.log(idade); 

// ******Resposta: TypeError - Atribuição a uma constante, variável já declarada. (não pode ser reatribuida.)


////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
   // console.log(x); 
}
// console.log(x);

// ********Resposta: Vai aparecer a variavel de dentro do esocpo. Já a variavel de fora aparecerá como "is not defined", 
// ****ou seja, a variável x não foi definido

///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

// console.log(x);
// console.log(y);

// *****Resposta: No console x nãi aparece o valor atribuido aparece como x não definido, e o console y aparece o valor que foi atribuido

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
var a = 5;
//console.log(b);
let b = 10;

// *****Resposta: A variável a aparece como undefined; já a variável b diz que não é possivel acessar antes da inicialização.
// ***** No Hoisting a variável criada é elevada para o escopo, mas sem o valor. 

/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

// var x = 5;
// var x = 10;
//  console.log(x); 

// let y = 15;
// let y = 20; 
// console.log(y); 

// *******Resposta: Há erro de sintaxe, pois a variável y já foi declarada.

//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo'

//sua lógica para pegar a primeira letra 
const letraInicial = nomeCompleto[0];
console.log(letraInicial)








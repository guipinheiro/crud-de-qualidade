var n1 = 100;
var n2 = 200;

console.log(n1 + n2);

// Ler código é fundamental, portanto nomear variáveis de acordo é importante
// O exemplo acima apresenta uma péssima forma de nomear variáveis, pois seus nomes não significam nada
// Portanto, contexto é importante

const userFirstInputNumber = 10;
const userSecondInputNumber = 20;

console.log(userFirstInputNumber + userSecondInputNumber);

// Além de mudar nomes, é importante atribuir o tido de dado correto
// Nesse caso, como JS é uma linguagem tipada dinamicamente, basicamente
// preocupa-se em saber se o valor será constante ou pode mudar durante o código (const x let)

// =============================================

var inputDoUsuario;

// No browser
// 1- pode ser uma string
// 2- elemento do DOM (campo de busca do DOM)

const inputUsuario = document.querySelector("input").value;
const $inputUsuario = document.querySelector("input"); // Cifrão indica elemento do DOM

// Booleanos
document.querySelector("input").hasAttribute("value"); // true | false
// has ou is indica retorno de booleano, aumentando a previsibilidade do retorno de uma função

if (hasSomething || isAnything) {
}
if (naoTemNada) {
}

// Melhor quebrar em vários ifs do que elses, pois elses geram uma gama de cenários inesperados

// should -> pode ser confuso


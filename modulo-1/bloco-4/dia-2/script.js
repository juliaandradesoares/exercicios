/*let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no fim do array
console.log(tasksList);

tasksList.unshift("Acordar"); // adiciona mais uma tarefa no início do array

console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift();  // remove a última tarefa
console.log(tasksList);*/

// Exercícios array

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

menu.push("Contato");

console.log(menu);

// Exercícios for

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
}

// Exercícios for/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nome of names) {
    console.log("Boas-vindas, " + nome);
}

// Exercícios do dia

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numero of numbers) {
    console.log(numero);
}

let somatorio = 0;

for (let numero of numbers) {
    somatorio += numero;
}

console.log(somatorio);

let novaSoma = 0

for (let numero of numbers) {
    novaSoma += numero;
}

console.log(novaSoma/numbers.length);

if(novaSoma/numbers.length > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

let maiorNumero = 0;

for (let numero of numbers) {
    if(numero > maiorNumero) {
        maiorNumero = numero;
    } else {
        maiorNumero = maiorNumero;
    }
}

console.log(maiorNumero);

let numerosImpares = 0;

for (let numero of numbers) {
    if (numero % 2 !== 0) {
        numerosImpares += 1
    } else {
        numerosImpares = numerosImpares;
    }
}

if (numerosImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log('O array tem ' + numerosImpares + ' números impares') 
}

let menorNumero = numbers[0];

for (let numero of numbers) {
    if(numero < menorNumero) {
        menorNumero = numero;
    } else {
        menorNumero = menorNumero;
    }
}

console.log(menorNumero);

let meuArray = [];

for (let index = 1; index <= 25; index += 1) {
    meuArray.push(index);
}

console.log(meuArray)

for (let numero of meuArray) {
    console.log(numero/2);
}
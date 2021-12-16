// exercicio 1

const numero = 10;
let resultado = 1;

for (let index = 1; index <= numero; index += 1) {
    resultado *= index;
}

console.log(resultado);

// exercicio 2

const palavra = 'tryber';
let palavraInvertida = '';

for (let letra of palavra) {
    palavraInvertida = letra + palavraInvertida;
}

console.log(palavraInvertida);

// exercicio 3, parte 1

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];

for (let palavra of array) {
    if (palavra.length > maiorPalavra.length) {
        maiorPalavra = palavra;
    } else {
        maiorPalavra = maiorPalavra;
    }
}

console.log(maiorPalavra);

// exercicio 3, parte 2

let menorPalavra = array[0];

for (let palavra of array) {
    if (palavra.length < menorPalavra.length) {
        menorPalavra = palavra;
    } else {
        menorPalavra = menorPalavra;
    }
}

console.log(menorPalavra);

// exercicio 4
let maiorPrimo = 2;
let ePrimo = true;

for (let numero = 3; numero <= 50; numero += 1) {
    for (let multiplicador = 2; multiplicador < numero; multiplicador += 1) {
        if ((numero % multiplicador) === 0) {
            ePrimo = false;
        } 
    }

    if (ePrimo === true) {
        maiorPrimo = numero;
    } else {
        maiorPrimo = maiorPrimo;
        ePrimo = true;
    }
}

console.log(maiorPrimo);

// exercicio 1, bônus

let quantidadeCaracteres = 3;


for (let linha = 1; linha <= quantidadeCaracteres; linha += 1) {
    let escrita = '';
    for (let caracteres = 1; caracteres <= quantidadeCaracteres; caracteres += 1) {
        escrita += '*';
    }
    console.log(escrita);
}

// exercicio 2, bônus

let quantidadeCaracteresBonus2 = 5;


for (let linha = 1; linha <= quantidadeCaracteresBonus2; linha += 1) {
    let escrita = '';
    for (let caracteres = 1; caracteres <= linha; caracteres += 1) {
        escrita += '*';
    }
    console.log(escrita);
}

// exercicio 3, bônus

let quantidadeCaracteresBonus3 = 5;


for (let linha = 1; linha <= quantidadeCaracteresBonus3; linha += 1) {
    let escrita = '';
    for (let caracteresembranco = 1; (caracteresembranco + linha) <= quantidadeCaracteres; caracteresembranco += 1) {
        escrita += ' ';
    }
    if(escrita.length < quantidadeCaracteresBonus3) {
        for (let asteriscos = 1; asteriscos <= linha; asteriscos += 1) {
            escrita += '*';
        }
    }
    
    console.log(escrita);
}

